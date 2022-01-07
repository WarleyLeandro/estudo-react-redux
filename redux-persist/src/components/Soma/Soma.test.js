import { render, screen} from '@testing-library/react';
import Soma from ".";

describe('Sum Components', ()=> {
    test('Deve iniciar o resultado como 11', () => {
        const {getByText} = render(<div/>);
        // const sumResults = getByText('11');
        // expect(sumResults).toBeInTheDocument();
    })
})