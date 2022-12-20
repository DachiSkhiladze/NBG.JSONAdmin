const images = [
  {
    value: "ავტომობილი-01.png",
    label: require("../../../assets/ავტომობილი-01.png"),
  },
  {
    value: "ავტომობილის საწვავი-01.png",
    label: require("../../../assets/ავტომობილის საწვავი-01.png"),
  },
  {
    value: "ბალახის საჭრელი-01.png",
    label: require("../../../assets/ბალახის საჭრელი-01.png"),
  },
  { value: "ბარგი-01.png", label: require("../../../assets/ბარგი-01.png") },
  { value: "გაზქურა-01.png", label: require("../../../assets/გაზქურა-01.png") },
  {
    value: "გამათბობელი-01.png",
    label: require("../../../assets/გამათბობელი-01.png"),
  },
  {
    value: "გარდირობი-01.png",
    label: require("../../../assets/გარდირობი-01.png"),
  },
  { value: "გიტარა-01.png", label: require("../../../assets/გიტარა-01.png") },
  { value: "დივანი-01.png", label: require("../../../assets/დივანი-01.png") },
  {
    value: "დინამიკი-01.png",
    label: require("../../../assets/დინამიკი-01.png"),
  },
  {
    value: "ელექტრო დრელი-01.png",
    label: require("../../../assets/ელექტრო დრელი-01.png"),
  },
  {
    value: "ელექტრო ჩაიდანი-01.png",
    label: require("../../../assets/ელექტრო ჩაიდანი-01.png"),
  },
  {
    value: "ველოსიპედი-01.png",
    label: require("../../../assets/ველოსიპედი-01.png"),
  },
  {
    value: "ზურგჩანთა-01.png",
    label: require("../../../assets/ზურგჩანთა-01.png"),
  },
  {
    value: "თავის მოვლის ნაკრები-01.png",
    label: require("../../../assets/თავის მოვლის ნაკრები-01.png"),
  },
  {
    value: "თერმო ჭიქა-01.png",
    label: require("../../../assets/თერმო ჭიქა-01.png"),
  },
  {
    value: "თმის საშრობი-01.png",
    label: require("../../../assets/თმის საშრობი-01.png"),
  },
  {
    value: "თმის საჭრელი მანქანა-01.png",
    label: require("../../../assets/თმის საჭრელი მანქანა-01.png"),
  },
  {
    value: "თხილამურები-01.png",
    label: require("../../../assets/თხილამურები-01.png"),
  },
  {
    value: "კალკულატორი-01.png",
    label: require("../../../assets/კალკულატორი-01.png"),
  },
  { value: "კომოდი-01.png", label: require("../../../assets/კომოდი-01.png") },
  {
    value: "კომპიუტერი-01.png",
    label: require("../../../assets/კომპიუტერი-01.png"),
  },
  {
    value: "კონდენციონერი-01.png",
    label: require("../../../assets/კონდენციონერი-01.png"),
  },
  {
    value: "კონტეინერი-01.png",
    label: require("../../../assets/კონტეინერი-01.png"),
  },
  {
    value: "კოსტიუმი-01.png",
    label: require("../../../assets/კოსტიუმი-01.png"),
  },
  {
    value: "ლანჩ ბოქსი-01.png",
    label: require("../../../assets/ლანჩ ბოქსი-01.png"),
  },
  {
    value: "ლანჩის ჩანთა-01.png",
    label: require("../../../assets/ლანჩის ჩანთა-01.png"),
  },
  { value: "ლარნაკი-01.png", label: require("../../../assets/ლარნაკი-01.png") },
  {
    value: "ლაშქრობის აღჭურვილობა-01.png",
    label: require("../../../assets/ლაშქრობის აღჭურვილობა-01.png"),
  },
  { value: "ლეპტოპი-01.png", label: require("../../../assets/ლეპტოპი-01.png") },
  { value: "მაგიდა-01.png", label: require("../../../assets/მაგიდა-01.png") },
  {
    value: "მაცივარი-01.png",
    label: require("../../../assets/მაცივარი-01.png"),
  },
  {
    value: "მაჯის საათი-01.png",
    label: require("../../../assets/მაჯის საათი-01.png"),
  },
  {
    value: "მზის სათვალე-01.png",
    label: require("../../../assets/მზის სათვალე-01.png"),
  },
  {
    value: "მიკროტალღური ღუმელი-01.png",
    label: require("../../../assets/მიკროტალღური ღუმელი-01.png"),
  },
  {
    value: "მიკროფონი-01.png",
    label: require("../../../assets/მიკროფონი-01.png"),
  },
  {
    value: "მიწაზე სამუშაო იარაღი-01.png",
    label: require("../../../assets/მიწაზე სამუშაო იარაღი-01.png"),
  },
  {
    value: "მოლბერტი-01.png",
    label: require("../../../assets/მოლბერტი-01.png"),
  },
  { value: "მოპედი-01.png", label: require("../../../assets/მოპედი-01.png") },
  {
    value: "მტვერსასრუტი-01.png",
    label: require("../../../assets/მტვერსასრუტი-01.png"),
  },
  {
    value: "მცენარეების სასუქი-01.png",
    label: require("../../../assets/მცენარეების სასუქი-01.png"),
  },
  {
    value: "ნარჩენების ურნა-01.png",
    label: require("../../../assets/ნარჩენების ურნა-01.png"),
  },
  {
    value: "ნებულაიზერი-01.png",
    label: require("../../../assets/ნებულაიზერი-01.png"),
  },
  {
    value: "პიკნიკის კალათა-01.png",
    label: require("../../../assets/პიკნიკის კალათა-01.png"),
  },
  {
    value: "პირველადი დახმარების ნაკრები-01.png",
    label: require("../../../assets/პირველადი დახმარების ნაკრები-01.png"),
  },
  {
    value: "პლანშეტი-01.png",
    label: require("../../../assets/პლანშეტი-01.png"),
  },
  {
    value: "პროექტორი-01.png",
    label: require("../../../assets/პროექტორი-01.png"),
  },
  {
    value: "საკანცელარიო სათავსო-01.png",
    label: require("../../../assets/საკანცელარიო სათავსო-01.png"),
  },
  {
    value: "საკერავი მანქანა-01.png",
    label: require("../../../assets/საკერავი მანქანა-01.png"),
  },
  {
    value: "სამეციდინო უნიფორმა-01.png",
    label: require("../../../assets/სამეციდინო უნიფორმა-01.png"),
  },
  {
    value: "სამზარეულოს აღჭურვილობა-01.png",
    label: require("../../../assets/სამზარეულოს აღჭურვილობა-01.png"),
  },
  {
    value: "სამზარეულოს კომბაინი-01.png",
    label: require("../../../assets/სამზარეულოს კომბაინი-01.png"),
  },
  {
    value: "სამზარეულოს უნიფორმა-01.png",
    label: require("../../../assets/სამზარეულოს უნიფორმა-01.png"),
  },
  {
    value: "სამკაული-01.png",
    label: require("../../../assets/სამკაული-01.png"),
  },
  {
    value: "საოჯახო კინოთეატრი-01.png",
    label: require("../../../assets/საოჯახო კინოთეატრი-01.png"),
  },
  {
    value: "სარეცხის მანქანა-01.png",
    label: require("../../../assets/სარეცხის მანქანა-01.png"),
  },
  { value: "სარკე-01.png", label: require("../../../assets/სარკე-01.png") },
  { value: "სასწორი-01.png", label: require("../../../assets/სასწორი-01.png") },
  { value: "საუნამო-01.png", label: require("../../../assets/საუნამო-01.png") },
  {
    value: "საშხაპე ნაკრები-01.png",
    label: require("../../../assets/საშხაპე ნაკრები-01.png"),
  },
  {
    value: "სერფინგის დაფა-01.png",
    label: require("../../../assets/სერფინგის დაფა-01.png"),
  },
  {
    value: "სინჯარები-01.png",
    label: require("../../../assets/სინჯარები-01.png"),
  },
  { value: "სკამი-01.png", label: require("../../../assets/სკამი-01.png") },
  {
    value: "სმარტ საათი-01.png",
    label: require("../../../assets/სმარტ საათი-01.png"),
  },
  {
    value: "სმარტფონი-01.png",
    label: require("../../../assets/სმარტფონი-01.png"),
  },
  {
    value: "სტეტოსკოპი-01.png",
    label: require("../../../assets/სტეტოსკოპი-01.png"),
  },
  { value: "სურათი-01.png", label: require("../../../assets/სურათი-01.png") },
  {
    value: "ტანსაცმლის საშრობი-01.png",
    label: require("../../../assets/ტანსაცმლის საშრობი-01.png"),
  },
  {
    value: "ტელევიზორი-01.png",
    label: require("../../../assets/ტელევიზორი-01.png"),
  },
  { value: "ტოსტერი-01.png", label: require("../../../assets/ტოსტერი-01.png") },
  { value: "ტროშერი-01.png", label: require("../../../assets/ტროშერი-01.png") },
  { value: "უთო-01.png", label: require("../../../assets/უთო-01.png") },
  {
    value: "უნიფორმა-01.png",
    label: require("../../../assets/უნიფორმა-01.png"),
  },
  {
    value: "ფორტეპიანო-01.png",
    label: require("../../../assets/ფორტეპიანო-01.png"),
  },
  {
    value: "ფოტოაპარატი-01.png",
    label: require("../../../assets/ფოტოაპარატი-01.png"),
  },
  {
    value: "ფუნჯები და საღებავები-01.png",
    label: require("../../../assets/ფუნჯები და საღებავები-01.png"),
  },
  { value: "ქამარი-01.png", label: require("../../../assets/ქამარი-01.png") },
  { value: "ქოლგა-01.png", label: require("../../../assets/ქოლგა-01.png") },
  {
    value: "ღამის სანათი-01.png",
    label: require("../../../assets/ღამის სანათი-01.png"),
  },
  {
    value: "ღვინის ბოთლის სახსნელი-01.png",
    label: require("../../../assets/ღვინის ბოთლის სახსნელი-01.png"),
  },
  { value: "ღუმელი-01.png", label: require("../../../assets/ღუმელი-01.png") },
  {
    value: "ყავის მაგიდა-01.png",
    label: require("../../../assets/ყავის მაგიდა-01.png"),
  },
  {
    value: "ყავის მადუღარა-01.png",
    label: require("../../../assets/ყავის მადუღარა-01.png"),
  },
  {
    value: "ყვავილის ქოთანი-01.png",
    label: require("../../../assets/ყვავილის ქოთანი-01.png"),
  },
  {
    value: "ყურსასმენები-01.png",
    label: require("../../../assets/ყურსასმენები-01.png"),
  },
  {
    value: "ჩანაწერების წიგნაკი-01.png",
    label: require("../../../assets/ჩანაწერების წიგნაკი-01.png"),
  },
  {
    value: "წვენსაწური-01.png",
    label: require("../../../assets/წვენსაწური-01.png"),
  },
  { value: "წიგნები-01.png", label: require("../../../assets/წიგნები-01.png") },
  {
    value: "წიგნის კარადა-01.png",
    label: require("../../../assets/წიგნის კარადა-01.png"),
  },
  {
    value: "წნევის აპარატი-01.png",
    label: require("../../../assets/წნევის აპარატი-01.png"),
  },
  { value: "ხალიჩა-01.png", label: require("../../../assets/ხალიჩა-01.png") },
  {
    value: "ხელჩანთა-01.png",
    label: require("../../../assets/ხელჩანთა-01.png"),
  },
  { value: "ჰამაკი-01.png", label: require("../../../assets/ჰამაკი-01.png") },
];

export default function useImages() {
  return images;
}
