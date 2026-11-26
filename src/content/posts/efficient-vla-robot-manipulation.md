---
title: Efficient VLA Robot Manipulation
previewImage: /images/vla/grids-film-bowl-on-stove.gif
previewAlt: GridS-FiLM policy successfully placing a bowl on the stove in simulation
author: Nathan McMillan
period: Fall 2026
pubDatetime: 2026-11-26T00:00:00-05:00
featured: true
draft: false
tags:
  - project
  - Python
  - PyTorch
  - MuJoCo
  - Robosuite
  - LIBERO
  - CUDA
description: >-
  Can a robot follow an instruction like “put the bowl on the stove” with less visual input? I tested five policies in simulation. Across two tasks, the policy using 16 visual tokens per camera succeeded 63.75% of the time, compared with 82.5% for the version using 256.
timezone: America/New_York
---

A vision-language-action (VLA) policy uses camera observations and language instructions to choose a robot's actions. I trained and evaluated five policies on two simulated manipulation tasks using 80 demonstrations. I wanted to know how task success changed when the policy had fewer visual tokens to work with.

| Approach | Visual tokens per camera | Task success |
| --- | ---: | ---: |
| Dense image-language sampling | 256 | 82.5% |
| GridS-FiLM with demonstration-based action retrieval | 16 | 63.75% |

The second approach used one-sixteenth as many visual tokens per camera. On these tasks, that reduction came with an 18.75 percentage-point drop in success.

[Explore the training and evaluation code on GitHub](https://github.com/njmcmil/t2-grids-robot-learning)

## How GridS selects visual tokens

![Two camera views comparing dense sampling with GridS pruning, alongside charts of real-world execution time and success rate.](/images/vla/grids-token-comparison.png)

The figure illustrates how GridS reduces each camera view from 256 visual tokens to 16. The charts on the right describe real-world experiments. My evaluation above measures task success in simulation.
