import { fireEvent, render, screen } from "@testing-library/react"
import { SearchBar } from "./SearchBar"

describe('Testing <SearchBar/>', () => { 

    test('should be rendered the Props', () => {
        render(<SearchBar value="text some" onChange={()=> {}} placeholder="Text on me"/>)
        const input = screen.getByRole('textbox');
        fireEvent.input(input,{ target: {value : 'text some'}})
    })
    
 })