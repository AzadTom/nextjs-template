import AuthExample from "@/components/auth/Example";
import FilterContainer from "@/components/filters/FilterContainer";

export default function Home() {
  return (
    <main className="p-4">
      <FilterContainer/>
      <AuthExample />
    </main>
  );
}
