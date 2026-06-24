import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Struggle } from "@/components/sections/struggle";
import { Capabilities } from "@/components/sections/capabilities";
import { System } from "@/components/sections/system";
import { Methodology } from "@/components/sections/methodology";
import { TwoWays } from "@/components/sections/two-ways";
import { NotAgency } from "@/components/sections/not-agency";
import { FoundedBy } from "@/components/sections/founded-by";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main>
        <Hero />       {/* Light — EAE6E1 */}
        <Struggle />   {/* Light — F6F4F1 */}
        <Capabilities />{/* Dark  — 0B0F14 */}
        <System />     {/* Light — EAE6E1 */}
        <Methodology />{/* Dark  — 0B0F14 */}
        <TwoWays />    {/* Light — F6F4F1 */}
        <NotAgency />  {/* Dark  — 0B0F14 */}
        <FoundedBy />  {/* Light — EAE6E1 */}
        <Cta />        {/* Light — EAE6E1 */}
      </main>
      <Footer />       {/* Dark  — 070a0e */}
    </div>
  );
}
