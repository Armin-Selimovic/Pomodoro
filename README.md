# Pomodoro

A simple Pomodoro timer built with **React + TypeScript (.tsx)** still in progress.
This project was my way of learning how to compile, run and use `.tsx` files. It was a challenge, but fun!

---

## 🚀 Running the Project

The app is written in **TypeScript/TSX** but runs in the browser as **plain JavaScript**.

1. **Compile .tsx to .js in watch mode**
	`npx esbuild src/main.tsx --bundle --outfile=main.js --watch`
2. Serve the project
	* Option A: Use VS Code’s Live Server extension → just open index.html.
	* Option B (optional): Use Node’s live-server:
		* `npx live-server dist`
	As long as main.js is updated, either approach works.

---

TODO Future Features
Planned improvements for the Pomodoro app:
* 📊 Stats dashboard - track how many hours you’ve studied/worked
* ✅ TODO list - manage tasks alongside the timer
* 👤 Accounts - link stats and tasks to a user
* 📅 History - see which days you used the Pomodoro and how much time you logged
* ⏰ Timer notifications - follow Pomodoro cycles (3 short breaks -> 1 long break)
