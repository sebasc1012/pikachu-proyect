import { fireEvent, render, screen } from "@testing-library/react"
import { SearchBar } from "./SearchBar"

describe('Testing <SearchBar/>', () => { 

    test('should be change the text on the input', () => {
        render(<SearchBar value="" onChange={()=> {}} placeholder="Text on me"/>)
        const input = screen.getByRole('textbox');
        fireEvent.input(input,{ target: {value : 'text some'}})
        expect(input.textContent ).toBe('')
    })
    

    test('should be rendered the type', () => {
        render(<SearchBar value="text some" onChange={()=> {}} placeholder="Text on me"/>)
        const input = screen.getByRole('textbox');
       expect(input).toBeInTheDocument()
    })
 })