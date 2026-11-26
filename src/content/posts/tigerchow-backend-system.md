---
title: TigerChow Backend System
author: Nathan McMillan
period: Spring 2025
pubDatetime: 2026-11-26T00:00:00-05:00
featured: false
draft: false
tags:
  - project
  - JavaScript
  - Node.js
  - AWS Lambda
  - API Gateway
  - DynamoDB
description: >-
  TigerChow’s backend manages accounts, sends notifications, and handles orders containing several items. I built the Node.js services on AWS Lambda, exposed them through API Gateway, and used DynamoDB to store the application data.
timezone: America/New_York
---

My work on TigerChow focused on the backend for three parts of the application: managing accounts, handling notifications, and placing orders. The order API had to handle several items in a single order.

I built and deployed the services in JavaScript with Node.js. API Gateway exposed the endpoints, AWS Lambda ran the request handlers, and DynamoDB provided storage. Together, those services let the application call the account, notification, and order APIs without a dedicated application server.
