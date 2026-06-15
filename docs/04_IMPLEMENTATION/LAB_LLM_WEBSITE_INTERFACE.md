# LAB LLM Website Interface

Status: implementation note.
Date: 15 June 2026

---

## What Was Added

A bounded LAB LLM proof interface was added to the website.

It answers from a local, approved concept record instead of calling an external model from the browser.

This is intentional.

---

## Current Mode

```text
Browser UI
→ local approved context
→ deterministic answer builder
→ visible boundary note
```

This is a proof interface, not a production LLM service.

---

## Why Not Put an API Key in the Browser

Browser-exposed model keys can be extracted and abused.

Production inference should run behind a server endpoint.

---

## Production Upgrade Path

```text
Browser chat UI
→ server endpoint
→ input validation
→ prompt-injection checks
→ approved retrieval context
→ model call
→ evidence filter
→ output boundary check
→ logged response
```

---

## Minimum Server Contract

The production endpoint should accept:

```json
{
  "question": "string",
  "sessionId": "string",
  "sourceScope": ["approved_public_site", "approved_lab_records"]
}
```

The response should return:

```json
{
  "answer": "string",
  "citations": [
    {
      "title": "string",
      "path": "string",
      "support": "direct | partial | not_supported"
    }
  ],
  "boundary": "string",
  "reviewRequired": true
}
```

---

## Non-Negotiable Controls

- No sensitive documents pasted into the public website.
- No model API key in client-side code.
- No unsupported claims about compliance, security, or legal certainty.
- No hidden retrieval from unapproved sources.
- No action-taking agent until approval gates exist.

---

## Current Claim

Safe public claim:

> The LAB LLM interface demonstrates how a website can answer from bounded, approved context before a production model is connected.

Unsafe claim:

> The website now contains a production AI assistant.
