import { render } from '@testing-library/react'
import TopTen from './TopTen'

describe('TopTen Component', () => {
    it('rendered TopTen', () => {
        const { getByTestId } = render(<TopTen />)
        const routes = getByTestId('routes')
        expect(routes).toBeTruthy()
    })
})
