

export const filterByPrice  = ["low", "medium", "high"];
export const filterByCategory = ["electronics", "fashion", "home", "beauty", "sports"];
export const filterByYear = ["2020", "2021", "2022", "2023", "2024"];
export const filterByOrder = ["ascending", "descending"];


export type FilterOption = {
  label: string;
  showArrow: boolean;
  hasBottomSheet: boolean;
  options?: string[];
};

export const optionsList: FilterOption[] = [
  { label: "On sale", showArrow: false, hasBottomSheet: false },
  { label: "Rating", showArrow: true, hasBottomSheet: true, options: ["4 stars & up", "3 stars & up", "2 stars & up", "1 star & up"] },
  { label: "Size", showArrow: true, hasBottomSheet: true, options: ["Small", "Medium", "Large"] },
  { label: "Color", showArrow: true, hasBottomSheet: true, options: ["Black", "White", "Blue", "Red"] },
  { label: "Brand", showArrow: true, hasBottomSheet: true, options: ["Brand A", "Brand B", "Brand C"] },
  { label: "Material", showArrow: true, hasBottomSheet: true, options: ["Cotton", "Leather", "Plastic"] },
  { label: "Condition", showArrow: true, hasBottomSheet: true, options: ["New", "Used"] },
  { label: "Discount", showArrow: true, hasBottomSheet: true, options: ["10% or more", "25% or more", "50% or more"] },
  { label: "Availability", showArrow: false, hasBottomSheet: false },
  { label: "Shipping", showArrow: true, hasBottomSheet: true, options: ["Free shipping", "Express shipping"] },
  { label: "Return policy", showArrow: true, hasBottomSheet: true, options: ["30-day returns", "Free returns"] },
  { label: "Warranty", showArrow: true, hasBottomSheet: true, options: ["1 year", "2 years"] },
  { label: "Seller rating", showArrow: true, hasBottomSheet: true, options: ["4 stars & up", "3 stars & up"] },
  { label: "Customer reviews", showArrow: false, hasBottomSheet: false },
  { label: "Price range", showArrow: true, hasBottomSheet: true, options: ["Under $25", "$25 to $50", "$50 to $100", "Over $100"] },
  { label: "New arrivals", showArrow: false, hasBottomSheet: false },
  { label: "Best sellers", showArrow: false, hasBottomSheet: false },
];
