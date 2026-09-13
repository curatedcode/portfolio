---
id: 4
title: "HiCo Race Timing Website Redesign: UX/UI Case Study"
excerpt: "Their old site did the job, but it undersold the company. You couldn't tell from browsing it that this is a business built on precision and trust. So I centered the rebuild around two things: organizers shopping for a timing partner, and participants just trying to find their race results"
date: "2026-09-11"
author: "Zack F."
slug: "hico-race-timing"
---

## Overview

I came across HiCo Race Timing's site when I ran a 5K they were timing. I felt it undersold the company when compared to their precision in timing results. Information was crammed in without much thought for who was actually looking for what, so both race directors and us runners had to dig for basics.

I rebuilt the site around those two very different visitors: organizers shopping for a timing partner, and participants just trying to find their results.

## Problem Statement

A few things kept coming up as I audited the old site:

1. **The structure didn't match how people actually use the site.** Services, events, and results were laid out more like a filing cabinet than a set of answers to the questions people show up with.
2. **Nothing stood out.** Key details like event dates, result links, contact info all sat at the same visual weight as everything around them, so nothing pulled your eye where it needed to go.
3. **Results pages were a slog.** Different PDF's for each race, with no real way to search or filter meaning anyone looking for one runner had to click through each and visually scan for that name.
4. **The look didn't match the work.** HiCo's actual timing is accurate and professional; the site felt dated and didn't carry that same weight.

## Design Solution

### Information Architecture & User Flow

The biggest structural change was turning results into a proper query builder, instead of separate PDF's, people can filter down to their exact needs.

### Visual Design System

I wanted a look that felt competitive without tipping into flashy. The palette leans on different shades of brown as a base, with orange used sparingly to flag what matters, a CTA, a result highlight, and interactive elements. The font and type system does a lot of the heavy lifting here too; making it much easier to read at a glance.

### Race Results Experience

This was the part I spent the most time on, since it's arguably the whole reason people visit the site on race day. Instead of a static dump of times, the new experience lets people search and filter by name, bib number, or placements, so finding your own result (or your friend's) takes seconds instead of clicking through separate PDF files.

### Responsive Implementation

Everything was built component-first so it holds up across screen sizes. The tricky part was keeping dense content, results tables especially, legible on mobile without stripping out the filtering that makes them useful in the first place.

### Accessibility Considerations

I cleaned up heading structure, tightened spacing and contrast, and made sure interactive elements (filters, buttons, form fields) are usable with a keyboard and readable at a glance. Nothing exotic just the basics done properly, which the old site was missing.

## Expected Outcomes

- Organizers can find and evaluate HiCo's services without digging.
- Event info and results are a click or two away, not buried in files.
- Results are actually searchable, which matters most on race day when everyone's trying to load the same page at once.
- The brand now looks like what it is: a company that takes accuracy seriously.
- The whole thing holds together across devices instead of falling apart on mobile.