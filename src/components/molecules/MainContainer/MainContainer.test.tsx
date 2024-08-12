import { render } from "@testing-library/react"
import { MainLayout } from "./MainContainer"

describe('Testing <MainContainer.tsx/>', () => {

    const className = 'classExample'

  test('should be rendering the props children and className', () => {


    render(<MainLayout children= '' className={className}/>)
  })  
})
