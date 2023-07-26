# dataset-json

Automatic JSON via dataset `json` attribute.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="module">
        import 'https://unpkg.com/dataset-json';

        // implicitly stringify values as JSON
        document.body.dataset.json = {any: 'json', value: true};

        // implicitly parse values from JSON
        document.body.dataset.json;
        // {any: 'json', value: true}
    </script>
</head>
</html>
```
