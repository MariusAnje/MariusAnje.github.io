---
layout: page
title: Realistic Worst-Case Performances
description: Improving realistic worst-case performance of NVCiM DNN accelerators through training with right-censored gaussian noise
img: assets/img/RCG.jpg
importance: 1
category: work
related_publications: true
---

Compute-in-Memory (CiM), built upon non-volatile memory (NVM) devices, is promising for accelerating deep neural networks (DNNs) owing to its in-situ data processing capability and superior energy efficiency. Unfortunately, the well-trained model parameters, after being mapped to NVM devices, can often exhibit large deviations from their intended values due to device variations, resulting in notable performance degradation in these CiM-based DNN accelerators. There exists a long list of solutions to address this issue. However, they mainly focus on improving the mean performance of CiM DNN accelerators. How to guarantee the worst-case performance under the impact of device variations, which is crucial for many safety-critical applications such as self-driving cars, has been far less explored. In this work, we propose to use the k-th percentile performance (KPP) to capture the realistic worst-case performance of DNN models executing on CiM accelerators. Through a formal analysis of the properties of KPP and the noise injection-based DNN training, we demonstrate that injecting a novel right-censored Gaussian noise, as opposed to the conventional Gaussian noise, significantly improves the KPP of DNNs. We further propose an automated method to determine the optimal hyperparameters for injecting this right-censored Gaussian noise during the training process. Our method achieves up to a 26% improvement in KPP compared to the state-of-the-art methods employed to enhance DNN robustness under the impact of device variations.

https://doi.org/10.1109/ICCAD57390.2023.10323830
