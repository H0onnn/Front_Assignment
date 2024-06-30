import { SelectedItemsProvider as ContextProvider } from "context/SelectedItemContext"
import { DragColumns } from "components/DragColumns"
import { PageLayout } from "components/common/layout"

const App = () => {
  return (
    <PageLayout>
      <ContextProvider>
        <DragColumns />
      </ContextProvider>
    </PageLayout>
  )
}

export default App
