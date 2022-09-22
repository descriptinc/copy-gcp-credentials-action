# Copy GCP Credentials Action

Copies credentials file into the _other_ running pod. The only important part here is that it makes sure to cleanup after itself.

## Inputs

### `source-file`

**Required** The source file to copy

### `destination-file`

**Required** Where to copy the file. This will be deleted at the end.

## Example usage

```yaml
uses: descriptinc/copy-gcp-credentials-action@main
with:
  source-file: /some/input/file
  destination-file: /some/output/file
```
