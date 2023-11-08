function customGitCommands() {
   local date="$1"
  # Navigate to your Git repository directory
  # cd /path/to/your/repo

  # Run a series of Git commands
  git pull
  git add -A
  git commit -m "Cc"
  git commit --amend --date "2023-11-$date 20:12:20"
  git push
}
customGitCommands "$1"