# How to Build a Personal Site Like This One

**A no-terminal guide for total beginners.** You'll use Claude Code (the AI assistant inside the Claude desktop app) to do all the technical work. You'll spend most of your time describing what you want and letting Claude write the code.

**Time required:** ~1 hour for a basic site, plus however long you want to spend writing your bio and picking photos.

---

## What you need before you start

1. **The Claude desktop app** installed on your Mac. Download from [claude.ai/download](https://claude.ai/download) and sign in.
2. A **GitHub account**. Sign up free at [github.com](https://github.com).
3. A **Cloudflare account**. Sign up free at [cloudflare.com](https://cloudflare.com). No credit card required.
4. Your **resume** (PDF, Word, or just notes about your work history).
5. A **headshot photo** and any other photos you want on the site (travel, hobbies, etc.).

You don't need to know what a terminal is. You don't need to install Node, pnpm, or any other developer tools. Claude Code will install whatever's needed and run the commands for you.

---

## Step 1. Make a folder for your project

Open **Finder** on your Mac. Go to your Desktop or Documents. Create a new folder. Name it something like `my-website` or `personal-site`.

You can do this by right-clicking and choosing **New Folder**.

Remember where this folder lives. You'll point Claude Code at it next.

---

## Step 2. Open the folder in Claude Code

1. Open the **Claude** desktop app.
2. In the sidebar, look for **Claude Code** (or click the terminal-like icon).
3. Click **Open Folder** (or **Add Project**) and pick the folder you just made.
4. Claude Code now has access to that folder and can run commands inside it.

---

## Step 3. Tell Claude Code to clone the template

Copy this and paste it as your first message to Claude Code:

> Please clone the Starfolio template into this folder, install the dependencies, and start the dev server so I can see it locally.
>
> Here's the repo: https://github.com/webrating/starfolio
>
> If I'm missing anything (like Node.js or pnpm), please install it for me.

Claude Code will ask permission to run commands. Approve them. After a few minutes you'll see a message saying the dev server is running at `http://localhost:4321`.

Open that URL in your browser. You should see the template website with a fake person named Alex Mercer. That's what you'll personalize.

---

## Step 4. Personalize your site (let Claude do it)

This is the fun part. You'll have a conversation with Claude Code, and it will edit the files for you.

### Send your resume info

Drag your resume PDF into the Claude Code chat (or paste your work history as text). Then say:

> Replace the placeholder data in src/data/resume.tsx with my information from this resume. Keep the section structure but use my name, jobs, education, and skills.

Claude will read the resume and update `resume.tsx` with your info.

### Tweak the bio and personal sections

Read what Claude wrote. If you want changes, just say so:

> Change "Hi, I'm Alex" to "Hi, I'm [YourFirstName]". Make the about section more personal. Mention that I love rock climbing and travel. Disable the hackathons section since I don't have any.

> Add a section for [your hobby] at the bottom of the page.

Be conversational. Claude will figure out where the changes go.

### Pick your colors and font

Open [tweakcn.com](https://tweakcn.com) in your browser. Play with the theme until you like it. Click **Theme Code**, switch to **Tailwind v3** if available (v4 also works), and copy the CSS.

Paste it into Claude Code with:

> Update src/data/config.ts to use this theme:
> [paste the CSS here]

For fonts, browse [fontsource.org](https://fontsource.org/?variable=true) (filter by Variable). Pick one. Tell Claude:

> Change the site font to [font name]. Install the package and update src/styles/global.css.

---

## Step 5. Add your photos and avatar

In Finder, drag your photos into the project folder. The simplest place is `src/data/` (Claude will move them where they need to go).

Then say:

> I added my headshot called [filename]. Use it as my avatar.
>
> I also added [N] travel photos. Replace the placeholder photos in the photos section with mine.

Claude will move them to `public/` and update the photos array.

---

## Step 6. Update the favicon

The favicon is the tiny icon you see in the browser tab. Tell Claude:

> Change the favicon to show my initials: [your initials, e.g. "MCP"].

---

## Step 7. Preview and iterate

Refresh `http://localhost:4321` in your browser after each change. If something looks off, just tell Claude:

> The DJ section is too long. Shorten it to one line.
>
> Move the education section to the bottom.
>
> Make the photo grid show 12 photos instead of 9.

Keep going until you're happy with it.

---

## Step 8. Push your site to GitHub

### Create a new GitHub repo
1. Go to [github.com/new](https://github.com/new) in your browser.
2. Pick a name. Anything is fine. The GitHub repo name does not affect your website URL. Examples: `marie-personal-site`, `marie-portfolio`.
3. Set it to **Public**.
4. Do not add a README, .gitignore, or license.
5. Click **Create repository**.

### Tell Claude Code to push your code
> I just created a GitHub repo at https://github.com/[your-username]/[your-repo-name]. Please push all my code to it.

Claude will configure the remote and push. You may be prompted to log in to GitHub the first time, follow the instructions on screen.

---

## Step 9. Deploy to Cloudflare Pages

This part you do in the browser yourself.

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) and sign in.
2. If Cloudflare drops you into a Workers setup screen, scroll down and click **"Looking to deploy Pages? Get started"**.
3. Click **Get started** next to **"Import an existing Git repository"**.
4. Connect your GitHub account, then pick the repo you just created.

### Fill in the build settings exactly like this:

| Field | Value |
|---|---|
| **Project name** | This becomes your URL: `<project-name>.pages.dev`. Pick something you like. **Note:** you can't change this later without recreating the project. |
| **Production branch** | `master` |
| **Framework preset** | **Astro** |
| **Build command** | `pnpm build` |
| **Build output directory** | `dist` |

### Click "Environment variables (advanced)" and add this:

| Variable | Value |
|---|---|
| `NODE_VERSION` | `22` |

This step is critical. Without it the build will fail.

### Click Save and Deploy.

Cloudflare runs the build (takes ~2 minutes). When it's done, your site is live at `https://<project-name>.pages.dev`.

---

## Step 10. Make changes anytime

From now on, whenever you want to update your site:

1. Open Claude Code
2. Tell it what you want changed
3. When you're happy, tell Claude:
   > Commit and push these changes.

Cloudflare detects the push within ~30 seconds and redeploys automatically. No clicks needed.

---

## Common questions and gotchas

**Q: Can I add a video?**
Yes, but Cloudflare rejects files over 25MB. If your video is bigger, tell Claude:
> Compress this video to under 25MB.

Claude will use ffmpeg to shrink it (a 30MB phone screen recording usually compresses to under 2MB with no visible quality loss).

**Q: I want a custom domain (like marieperry.com)**
Buy one. Cloudflare sells them at cost in the **Domain Registration** section of the dashboard. Then in your Pages project, click **Custom domains** and add it. Cloudflare handles SSL for free.

**Q: I picked a bad project name on Cloudflare. How do I change it?**
You can't rename a Pages project's URL. To change it, delete the project in Cloudflare (it just removes the deployment, your code stays safe on GitHub) and create a new one with the new name.

**Q: I'm seeing an error in the Cloudflare deploy log**
Copy the error and paste it to Claude Code:
> The Cloudflare build failed. Here's the error: [paste]
> Please fix it.

**Q: Should I commit my resume PDF or other personal docs?**
No. Tell Claude:
> Add `*.pdf` and any personal documents to .gitignore so they don't get pushed publicly.

**Q: I want to share this guide with a friend**
This file (`make-your-own.md`) is in your repo. They can read it on GitHub or you can send them the link.

---

## What Claude Code is doing under the hood

If you're curious. You don't need to understand any of this to use the guide.

- **Cloning** copies the template code from GitHub to your folder.
- **`pnpm install`** downloads all the libraries the site uses.
- **`pnpm dev`** runs a local server so you can preview changes instantly.
- **`pnpm build`** packages everything into static HTML/CSS/JS files for production.
- **`git push`** uploads your code to GitHub.
- **Cloudflare** watches your GitHub repo, re-runs `pnpm build` whenever you push, and serves the result on a global CDN.
