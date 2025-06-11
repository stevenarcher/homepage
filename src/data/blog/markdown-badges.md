---
author: Steven Archer
pubDatetime: 2024-05-23T15:22:00Z
modDatetime: 2023-12-21T09:12:47.400Z
title: Markdown Badges
slug: markdown-badges
featured: false
draft: false
tags:
  - markdown
  - util
description:
  A simple GUI for generating custom Shields.io badges for use in Markdown files and pull requests
---

Badges are a great way to add dynamic and visual indicators to your Markdown files—for things like build status, browser compatibility, license info, or custom messages.

Using the [Shields.io](https://shields.io) API, I built a small GUI tool to make badge creation easier and more intuitive. This can be especially useful when adding visual links or highlights to README files, documentation, or GitHub pull requests.

👉 **Try it here**: [Badge Generator](https://ek54lj.csb.app/)

---

## Example

Here's an example of a custom badge that links to [caniuse.com](https://caniuse.com) for the WebGPU feature:

[![data_attributes](https://img.shields.io/badge/can_i_use-web_gpu-F7DF1E.svg?style=for-the-badge&logo=javascript)](https://caniuse.com/webgpu)

You can customize the label, message, colors, logos, and even choose between flat, plastic, or "for-the-badge" styles.
