---
title: Automotive Visual Inspection (AVI)
previewImage: /images/avi/web-interface.png
previewAlt: AVI inspection interface with engine-bay components outlined and labeled
author: Nathan McMillan
period: Fall 2026
pubDatetime: 2026-11-26T00:00:00-05:00
featured: true
draft: false
tags:
  - project
  - Python
  - Rust
  - TensorRT
  - YOLO
description: >-
  AVI helps an inspector identify components in an engine-bay photo. Its web interface draws boxes around parts such as the battery and coolant reservoir and shows a confidence score for each detection. I trained the detector on 500+ engine-bay images and connected it to a language-model agent.
timezone: America/New_York
---

As an undergraduate researcher in Clemson University's AutoAI Research Laboratory, I work on a BMW-funded project exploring how computer vision can support automotive inspection. 

My focus towards the project is on providing the framework for a vehicle-inspection web-interface. I built the object-detection prototype in Python and Rust that connects a large-language-model agent to a YOLO26-N object detector. The detector locates engine-bay components in an image, and the agent can use those detections during inspection.

![AVI inspection interface showing labeled engine-bay components and detection scores](/images/avi/web-interface.png)

![Agentic AI rust code](/images/avi/rust-code-agent.png)

## Training on engine-bay images

I curated more than 500 engine-bay images and fine-tuned YOLO26-N on 4xH200 GPUs on Clemson's Palmetto Cluster 2. 

![AVI inspection interface showing labeled engine-bay components and detection scores](/images/avi/custom-dataset.png)


Fine-tuning improved the detector's **mAP@0.5 by 157% relative to baseline**. This metric measures how well the model finds and identifies objects. At the 0.5 threshold, a predicted bounding box must overlap the labeled box by at least half their combined area to count as a match.


## Ongoing research

Alongside the foundational prototype work, I co-authored a $100,000 NSF STRIDE proposal under Dr. Bing Li for research into adaptive automotive visual inspection.

