export interface User {
  id: string;
  email: string;
  name?: string;
  token?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  
  // Actions
  login: (userData: any) => Promise<void>;
  logout: () => Promise<void>;
  setLoading: (loading: boolean) => void;
  checkAuth: () => Promise<void>;
}
