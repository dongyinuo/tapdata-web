import { createSchemaField } from '@formily/vue'
import * as components from './components'

const { SchemaField } = createSchemaField({
  components
})

export { SchemaField }

export * from './components'
