﻿// Copyright (c) 2023 - 2024, Owners of https://github.com/ag2ai
// SPDX-License-Identifier: Apache-2.0
// Contributions to this project, i.e., https://github.com/ag2ai/ag2, 
// are licensed under the Apache License, Version 2.0 (Apache-2.0).
// Portions derived from  https://github.com/microsoft/autogen under the MIT License.
// SPDX-License-Identifier: MIT
// Copyright (c) Microsoft Corporation. All rights reserved.
// KernelFunctionExtensionTests.cs

using System.ComponentModel;
using ApprovalTests;
using ApprovalTests.Namers;
using ApprovalTests.Reporters;
using AutoGen.SemanticKernel.Extension;
using FluentAssertions;
using Microsoft.SemanticKernel;
using Newtonsoft.Json;
using Xunit;

namespace AutoGen.SemanticKernel.Tests;

public class TestPlugin
{
    public bool IsOn { get; set; } = false;

    [KernelFunction]
    [Description("Gets the state of the light.")]
    public string GetState() => this.IsOn ? "on" : "off";

    [KernelFunction]
    [Description("Changes the state of the light.'")]
    public string ChangeState(
        [Description("new state")] bool newState)
    {
        this.IsOn = newState;
        var state = this.GetState();

        // Print the state to the console
        Console.ForegroundColor = ConsoleColor.DarkBlue;
        Console.WriteLine($"[Light is now {state}]");
        Console.ResetColor();

        return $"The status of the light is now {state}";
    }
}
public class KernelFunctionExtensionTests
{
    private readonly JsonSerializerSettings _serializerSettings = new JsonSerializerSettings
    {
        Formatting = Formatting.Indented,
        NullValueHandling = NullValueHandling.Ignore,
        StringEscapeHandling = StringEscapeHandling.Default,
    };

    [Fact]
    [UseReporter(typeof(DiffReporter))]
    [UseApprovalSubdirectory("ApprovalTests")]
    public void ItCreateFunctionContractsFromTestPlugin()
    {
        var kernel = new Kernel();
        var plugin = kernel.ImportPluginFromType<TestPlugin>("test_plugin");

        var functionContracts = plugin.Select(f => f.Metadata.ToFunctionContract()).ToList();

        functionContracts.Count.Should().Be(2);
        var json = JsonConvert.SerializeObject(functionContracts, _serializerSettings);

        Approvals.Verify(json);
    }

    [Fact]
    [UseReporter(typeof(DiffReporter))]
    [UseApprovalSubdirectory("ApprovalTests")]
    public void ItCreateFunctionContractsFromMethod()
    {
        var kernel = new Kernel();
        var sayHelloFunction = KernelFunctionFactory.CreateFromMethod(() => "Hello, World!");
        var echoFunction = KernelFunctionFactory.CreateFromMethod((string message) => message);

        var functionContracts = new[]
        {
            sayHelloFunction.Metadata.ToFunctionContract(),
            echoFunction.Metadata.ToFunctionContract(),
        };

        var json = JsonConvert.SerializeObject(functionContracts, _serializerSettings);

        functionContracts.Length.Should().Be(2);
        Approvals.Verify(json);
    }

    [Fact]
    [UseReporter(typeof(DiffReporter))]
    [UseApprovalSubdirectory("ApprovalTests")]
    public void ItCreateFunctionContractsFromPrompt()
    {
        var kernel = new Kernel();
        var sayHelloFunction = KernelFunctionFactory.CreateFromPrompt("Say {{hello}}, World!", functionName: "sayHello");

        var functionContracts = new[]
        {
            sayHelloFunction.Metadata.ToFunctionContract(),
        };

        var json = JsonConvert.SerializeObject(functionContracts, _serializerSettings);

        functionContracts.Length.Should().Be(1);
        Approvals.Verify(json);
    }
}
