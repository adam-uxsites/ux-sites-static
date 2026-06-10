$extensions = @("*.tsx", "*.ts", "*.mjs")
$root = "artifacts/uxsites/src"

# Replacement map: mojibake → correct character
$replacements = @{
    "â€'" = "—"  # em dash
}

foreach ($ext in $extensions) {
    Get-ChildItem -Recurse -Filter $ext -Path $root | ForEach-Object {
        $path = $_.FullName
        $content = Get-Content -Path $path -Raw
        $changed = $false
        foreach ($pair in $replacements.GetEnumerator()) {
            if ($content -match [regex]::Escape($pair.Key)) {
                $content = $content -replace [regex]::Escape($pair.Key), $pair.Value
                $changed = $true
            }
        }
        if ($changed) {
            Set-Content -Path $path -Value $content -NoNewline -Encoding UTF8
            Write-Host "Fixed: $($_.Name)"
        }
    }
}

Write-Host "Done."
