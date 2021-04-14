# Reactive-readme
A small github action wrapper for [readme-box](https://github.com/JasonEtco/readme-box)
Full credits goes to @JasonEtco.

## What does it do?
Replace any section in your README.md file, with a given value
```
<!--START_SECTION:{section-name}-->
Old contents...
<!--END_SECTION:{section-name}-->
```

## Inputs
```
  value: 
    description: 'The value to set the template to.'
    required: true
    default: ''
  section:  
    description: 'The section of the README to update.'
    required: false
    default: 'section'
  github_token:
    default: ${{ github.token }}
  branch:
    default: ${{ github.event.repository.default_branch }}
    description: The target branch to update.
```
# Members
<!--START_SECTION:section-->
<!--END_SECTION:section-->
