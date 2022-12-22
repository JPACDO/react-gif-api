import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertapp } from "../src/GifExpertapp"

describe('Pruebas en <GifExpertapp />', () => { 

    test('should ', () => { 
        

        const categories = []

        const {container} = render( <GifExpertapp /> );

        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target : {value : 'Saitama'}} );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        const clase = container.getElementsByClassName('card-grid')

        expect( clase.length ).toBe(2)

        screen.debug();

     })

 })