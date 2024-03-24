import { TextField, Button, Typography, Link } from '@mui/material';
import useRecoverPassword from '../hooks/useRecoverPassword';

const RecoverPassword = () => {
    const { email, setEmail, message, handleSubmit } = useRecoverPassword();

    return (
        <div>
          <h2>Recover Password</h2>
          <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '10px' }}
            >
              Reset Password
            </Button>
          </form>
          {message && <Typography variant="body1" style={{ marginTop: '10px' }}>{message}</Typography>}
          <Typography variant="body2" style={{ marginTop: '10px' }}>
            Remember your password? <Link to="/login">Login</Link>
          </Typography>
        </div>
      );
    }

export default RecoverPassword;