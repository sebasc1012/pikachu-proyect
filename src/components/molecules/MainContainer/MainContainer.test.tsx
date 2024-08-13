import { render} from "@testing-library/react"
import { MainLayout } from "./MainContainer"
/**
 * @jest-environment jsdom
 */

describe('Testing <MainContainer.tsx/>', () => {

    const className = 'Testing'

  test('should be rendering the children in this case its a <p></p> and className', () => {
    render(<MainLayout className={className}>
      <p>Test</p>
    </MainLayout>)

    
  })  
})
