@echo off
set "file=%~1"
set "line=%~2"
set "col=%~3"

if "%line%"=="" (
    antigravity "%file%"
) else (
    if "%col%"=="" (
        antigravity-ide -g "%file%:%line%"
    ) else (
        antigravity-ide -g "%file%:%line%:%col%"
    )
)