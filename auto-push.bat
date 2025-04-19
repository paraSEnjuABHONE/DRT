@echo off
echo Automatic GitHub Push Script
echo ============================

REM Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: Git is not installed or not in your PATH.
    echo Please install Git from https://git-scm.com/downloads
    pause
    exit /b 1
)

REM Get current date and time for commit message
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /format:list') do set datetime=%%I
set COMMIT_MSG=Auto update %datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2% %datetime:~8,2%:%datetime:~10,2%

echo.
echo Adding all changes to git...
git add .

echo.
echo Committing changes with message: "%COMMIT_MSG%"
git commit -m "%COMMIT_MSG%"

echo.
echo Pushing to GitHub...
git push

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo There was an error pushing to GitHub.
    echo If this is your first push, you may need to set up the remote repository first.
    echo Please check GITHUB_NETLIFY_SETUP.md for instructions.
) else (
    echo.
    echo Successfully pushed to GitHub!
    echo Your changes will be automatically deployed to Netlify.
)

echo.
pause