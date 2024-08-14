import { render, screen } from "@testing-library/react"
import { CardMove } from "./CardMove"

describe('Testing <CardMove/>', () => { 

    test('should be rendered the image with the src and alt', () => {
        render(<CardMove/>)
        screen.debug()
      
    })
        
 })