Add-Type -AssemblyName System.Drawing
$destDir = "C:\Users\Vijay\Desktop\cricket\public\images"
if (!(Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }
$files = @("11.png", "44.png")
foreach ($f in $files) {
    try {
        $srcPath = "C:\Users\Vijay\Downloads\$f"
        $destPath = "$destDir\$f"
        $img = [System.Drawing.Image]::FromFile($srcPath)
        
        # Calculate new dimensions, target 400px width/height for avatar
        $factor = 400.0 / $img.Width
        if ($factor -gt 1) { $factor = 1 }
        $newHeight = [int]($img.Height * $factor)
        $newWidth = [int]($img.Width * $factor)
        
        $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graph = [System.Drawing.Graphics]::FromImage($bmp)
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)
        
        $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
        Write-Host "Compressed and saved $f to $destPath"
        
        $graph.Dispose()
        $bmp.Dispose()
        $img.Dispose()
    } catch {
        Write-Host "Failed to compress $f - $_"
    }
}
