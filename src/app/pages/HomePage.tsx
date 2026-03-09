import HomepageLayoutDesign from '../../imports/HomepageLayoutDesign-4-2766';
import { Navigation } from '../components/Navigation';

export default function HomePage() {
  return (
    <div className="homepage-shell bg-white">
      <Navigation />

      <main className="homepage-main">
        <div className="homepage-artboard">
          <HomepageLayoutDesign />
        </div>
      </main>
    </div>
  );
}
