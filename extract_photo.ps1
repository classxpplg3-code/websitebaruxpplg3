$htmlPath = "C:\Users\rajib zahir\Downloads\WhatsApp+Image+2026-02-23+at+23.14.57+(2).jpeg"
$html = Get-Content $htmlPath -Raw

# Extract base64 data from the images array
$match = [regex]::Match($html, "images=\['(data:[^']+)'")
if ($match.Success) {
    $dataUri = $match.Groups[1].Value
    $parts = $dataUri -split ',', 2
    $b64 = $parts[1]
    $bytes = [Convert]::FromBase64String($b64)
    
    # Determine extension from mime type
    $mime = $parts[0]  # e.g., data:image/bmp;base64
    $ext = "bmp"
    if ($mime -match "jpeg|jpg") { $ext = "jpg" }
    elseif ($mime -match "png") { $ext = "png" }
    
    $outPath = "C:\Users\rajib zahir\OneDrive\Documents\puasa\images\gallery\foto-batik.$ext"
    [System.IO.File]::WriteAllBytes($outPath, $bytes)
    Write-Host "Saved to: $outPath"
    Write-Host "Size: $($bytes.Length) bytes"
    Write-Host "MIME: $mime"
} else {
    Write-Host "Pattern not found, trying alternative..."
    # Try another pattern with double quotes
    $match2 = [regex]::Match($html, 'images=\["(data:[^"]+)"')
    if ($match2.Success) {
        Write-Host "Found with double quotes pattern"
        $dataUri = $match2.Groups[1].Value
        $parts = $dataUri -split ',', 2
        $b64 = $parts[1]
        $bytes = [Convert]::FromBase64String($b64)
        $outPath = "C:\Users\rajib zahir\OneDrive\Documents\puasa\images\gallery\foto-batik.bmp"
        [System.IO.File]::WriteAllBytes($outPath, $bytes)
        Write-Host "Saved: $outPath ($($bytes.Length) bytes)"
    } else {
        Write-Host "Could not find image data"
        # Show first 500 chars to debug
        $html.Substring(0, [Math]::Min(500, $html.Length))
    }
}
