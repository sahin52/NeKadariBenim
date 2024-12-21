import { useState } from 'react'
import './App.css'

const hisseler = {
  "EBEBK": 160000000,
  "ASELS": 1460000000,
}

function App() {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [lotCount, setLotCount] = useState('');
  const [ownershipPercentage, setOwnershipPercentage] = useState(null);

  // Şirket seçildiğinde toplam hisseyi buluyoruz
  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
    setOwnershipPercentage(null); // Yeni şirket seçildiğinde sonucu sıfırla
    setLotCount(''); // Yeni şirkete göre lot sayısını sıfırla
  }

  // Kullanıcı lot sayısını girdiğinde, sahip olunan yüzdelik oranı hesapla
  const handleLotCountChange = (event) => {
    const enteredLotCount = event.target.value;
    setLotCount(enteredLotCount);

    if (selectedCompany && !isNaN(enteredLotCount)) {
      const totalLots = hisseler[selectedCompany];
      const percentage = (enteredLotCount / totalLots) * 100;
      setOwnershipPercentage(percentage);
    }
  }
  
  const formatOwnershipPercentage = (percentage) => {
    if (percentage >= 1) {
      return `yüzde ${percentage.toFixed(2)}`; // Yüzde 1'den büyükse
    } else if (percentage >= 0.1) {
      return `binde ${(percentage * 10).toFixed(2)}`; // Binde 1 ile 1 arası
    } else if (percentage >= 0.0001) {
      return `milyonda ${(percentage * 10000).toFixed(2)}`; // Milyon (ppm) arası
    } else {
      return `milyarda ${(percentage * 10000000).toFixed(2)}`; // Milyar (ppb) arası
    }
  }

  return (
    <>
      <h1>Bir sirketin yuzde kaci senin?</h1>
      {/* Dropdown menü ile şirket seçimi */}
      <select onChange={handleCompanyChange} value={selectedCompany}>
        <option value="">Bir şirket seçin</option>
        {Object.keys(hisseler).map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>

      {/* Input ile sahip olunan lot sayısını girme */}
      <input 
        type="number" 
        placeholder="Sahip olunan lot sayısı" 
        value={lotCount}
        onChange={handleLotCountChange}
        disabled={!selectedCompany} // Eğer şirket seçilmemişse input devre dışı
      />

      {/* Sonuç olarak sahip olunan yüzdelik hesaplama */}
      {ownershipPercentage !== null && (
        <><p>
          Sahip olduğunuz {lotCount} lot, şirketin <b>%{ownershipPercentage.toFixed(9)}</b>&apos;sına karşılık gelmektedir.
        </p>
        <p>
          Yani sahip olduğunuz {lotCount} lot, şirketin <b>{formatOwnershipPercentage(ownershipPercentage)}</b>&apos;sına karşılık gelmektedir.
        </p>
        </>
      )}
      <p className="alti-not">
        Sitedeki verilerin doğruluğu garanti edilmez. Yatırım yapmadan önce verilerinizi kendi başınıza kontrol etmeniz önemlidir. Sorumluluk tamamen kullanıcılara aittir.
      </p>
    </>
  )
}

export default App
