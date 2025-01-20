import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './views/home/Home'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Product } from './views/product/Product';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
