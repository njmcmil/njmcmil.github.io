---
title: VLMs for Wildfire Detection
author: Nathan McMillan
period: Spring 2026
pubDatetime: 2026-11-26T00:00:00-05:00
featured: true
draft: false
tags:
  - project
  - Python
  - PyTorch
  - Qwen2.5-VL
  - SAM
  - PIDNet
description: >-
  This project identifies which pixels in an image contain wildfire smoke. I used a vision-language model to filter false alarms. On the evaluation set, the overlap score between predicted smoke regions and the reference labels improved by 72% relative to baseline.
timezone: America/New_York
---

A smoke segmentation model marks the pixels in an image that it predicts contain smoke. Before changing how those predictions were filtered, I reproduced a teacher-student pipeline that used SAM and PIDNet. My results for the small and medium PIDNet models were within 0.003 mean intersection over union (mIoU) of the published results. That gave me a baseline for evaluating changes.

I integrated Qwen2.5-VL to filter false positives and adjusted the confidence thresholds so the pipeline could retain the teacher's labels on uncertain predictions. On the evaluation set, mIoU improved by **72% relative to baseline**. The metric measures how closely predicted regions overlap the reference labels.

[View the wildfire detection project on GitHub](https://github.com/jhall27/VLM-Wildfire-Detection)
