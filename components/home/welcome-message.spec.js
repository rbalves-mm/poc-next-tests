import WelcomeMessage from './welcome-message'
import {render,screen} from '@testing-library/react'

describe('WelcomeMessage', () => {
    it('should render welcome message', () => {
        const message = 'Welcome to Next.js!'
        
        render(<WelcomeMessage />)

        expect(screen.getByText(message)).toBeInTheDocument();
    })
})