import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 bg-white">
        <div className="text-2xl font-bold text-blue-800">商談プロ</div>
        <div className="flex gap-6 items-center">
          <a href="#" className="text-gray-700 hover:text-gray-900">提供中の機能</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">選ばれる理由</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">提供予定の機能</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">よくある質問</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">企業情報</a>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            無料で事前登録する
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              『AI × インテント』
            </h1>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">
                業界最大級の営業DBが
              </div>
              <div className="text-6xl font-bold text-blue-600">
                完全無料
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 text-lg">
            『商談プロ』は、中小企業から上場企業まで国内500万企業を、
            売上・業界・採用情報・インテントデータ・連絡先で絞り込み、
            瞬時に質の高い営業リストを作成できる、完全無料の営業データベースです。
          </p>

          <div className="space-y-4">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6">
              今だけ！30秒で完了
              <span className="block font-normal">無料で事前登録する</span>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
            <Image
              src="/placeholder.svg"
              alt="Database Interface"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          
          {/* Feature Circles */}
          <div className="absolute inset-0 flex items-center justify-around">
            {["AI検索も！", "インテントデータも！", "採用情報も！", "連絡先も！", "完全\n無料"].map((text, index) => (
              <div
                key={index}
                className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-center text-sm font-bold transform -translate-y-12"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="text-center py-20 space-y-4">
        <div className="text-3xl">
          もう<span className="text-blue-600 font-bold">営業データベース</span>は
        </div>
        <div className="text-6xl">
          <span className="text-blue-600 font-bold">完全無料</span>の時代
        </div>
      </div>
    </div>
  )
}

