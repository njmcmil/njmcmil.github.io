---
title: Good Driver Incentive Program
previewImage: /images/good-driver/admin-dashboard.png
previewAlt: Good Driver admin dashboard showing user accounts, points awarded, and order status
author: Nathan McMillan
period: Spring 2026
pubDatetime: 2026-11-26T00:00:00-05:00
featured: true
draft: false
tags:
  - project
  - React
  - Python
  - MySQL
  - AWS
  - Docker
  - CI/CD
description: >-
  Drivers can redeem reward points for catalog items, and administrators can track accounts, points, and orders in one dashboard. I designed the React interface and Python API and set up automated checks for incoming requests.
timezone: America/New_York
---

I designed the platform around a responsive React interface and a Python REST API. The interface handles the driver-facing views, the API handles requests, and MySQL stores the application's data. AWS infrastructure supports the backend services.

My work also covered how changes reached the application. I configured automated deployment pipelines and wrote API tests for input validation, so changes to the backend could be checked as part of a release.

![Good Driver admin dashboard with summaries of users, orders, reward points, and redeemed items.](/images/good-driver/admin-dashboard.png)

[Explore the team repository on GitHub](https://github.com/njmcmil/S26-CPSC4910-Team27)
