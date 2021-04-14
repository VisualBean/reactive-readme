import { Toolkit } from 'actions-toolkit'
import { ReadmeBox } from 'readme-box'

interface Inputs {
  value: string
  section: string
  branch: string
  [key: string]: string
}

Toolkit.run<Inputs>(async tools => {
  // Update the section of our README
    await ReadmeBox.updateSection(tools.inputs.value, {
        ...tools.context.repo,
        token: tools.token,
        section: tools.inputs.section,
        branch: tools.inputs.branch || tools.context.payload.repository?.default_branch
    })
})