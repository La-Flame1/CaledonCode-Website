import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import MainLayout from "./MainLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services/Services";
import Tiers from "./pages/Tiers/Tiers";

const App = () => (
  <>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/tiers" element={<Tiers />} />
          <Route path="/services" element={<Services />} />
          {/* Add new route here */}
        </Route>
        {/* Catch all 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
