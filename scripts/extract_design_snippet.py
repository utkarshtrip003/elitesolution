import json
import re
from pathlib import Path


TRANSCRIPT = Path(
    "/Users/utkarshtripathi/.cursor/projects/Users-utkarshtripathi-Desktop-elitesolution/agent-transcripts/4a9ca447-ee83-4706-bd20-0d1b9bdf9c81/4a9ca447-ee83-4706-bd20-0d1b9bdf9c81.jsonl"
)


def main() -> None:
    first = TRANSCRIPT.read_text(encoding="utf-8").splitlines()[0]
    obj = json.loads(first)
    text = obj["message"]["content"][0]["text"]

    m = re.search(r"```html\s*(.*?)\s*```", text, flags=re.DOTALL | re.IGNORECASE)
    if not m:
        raise SystemExit("No HTML code fence found")

    html = m.group(1)

    # Try to locate the floating icon/illustration block in hero.
    # Heuristics: look for specific hero icons/ids first.
    for needle in [
        'iconify-icon icon="lucide:lightbulb"',
        'iconify-icon icon="lucide:rocket"',
        "hero",
        "illustration",
        "floating",
        "globe",
        "lightbulb",
        "rocket",
        # Keep CSS fallback last.
        "animate-float",
    ]:
        idx = html.lower().find(needle)
        if idx != -1:
            start = max(0, idx - 1200)
            end = min(len(html), idx + 1200)
            snippet = html[start:end]
            print(f"\n--- SNIPPET around '{needle}' ---\n")
            print(snippet)
            return

    raise SystemExit("Could not find floating icon section by heuristics")


if __name__ == "__main__":
    main()

