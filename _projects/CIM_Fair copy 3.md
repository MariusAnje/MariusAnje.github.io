---
layout: page
title: Worst-Case Performances
description: Compute-in-Memory Based Neural Network Accelerators for Safety-Critical Systems - Worst-Case Scenarios and Protections
img: assets/img/worst.png
importance: 1
category: work
related_publications: true
---

Emerging nonvolatile memory (NVM)-based computing-in-memory (CiM) architectures show substantial promise in accelerating deep neural networks (DNNs) due to their exceptional energy efficiency. However, NVM devices are prone to device variations. Consequently, the actual DNN weights mapped to NVM devices can differ considerably from their targeted values, inducing significant performance degradation. Many existing solutions aim to optimize average performance amidst device variations, which is a suitable strategy for general-purpose conditions. However, the worst-case performance that is crucial for safety-critical applications is largely overlooked in current research. In this study, we define the problem of pinpointing the worst-case performance of CiM DNN accelerators affected by device variations. Additionally, we introduce a strategy to identify a specific pattern of the device value deviations in the complex, high-dimensional value deviation space, responsible for this worst-case outcome. Our findings reveal that even subtle device variations can precipitate a dramatic decline in DNN accuracy, posing risks for CiM-based platforms in supporting safety-critical applications. Notably, we observe that prevailing techniques to bolster average DNN performance in CiM accelerators fall short in enhancing worst-case scenarios. In light of this issue, we propose a novel worst-case-aware training technique named A-TRICE that efficiently combines adversarial training and noise-injection training with right-censored Gaussian noise to improve the DNN accuracy in the worst-case scenarios. Our experimental results demonstrate that A-TRICE improves the worst-case accuracy under device variations by up to 33%.

https://doi.org/10.1109/TCAD.2024.3365633
