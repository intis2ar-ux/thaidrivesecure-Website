import { jsPDF } from "jspdf";

export function downloadDocumentChecklist(language: "en" | "ms") {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const maxWidth = pageWidth - margin * 2;
  let y = 20;

  // Helper function to add text and handle line breaks
  const addText = (text: string, fontSize: number, isBold = false, color: [number, number, number] = [0, 0, 0]) => {
    doc.setFontSize(fontSize);
    doc.setFont("helvetica", isBold ? "bold" : "normal");
    doc.setTextColor(color[0], color[1], color[2]);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, margin, y);
    y += lines.length * (fontSize * 0.5) + 4;
  };

  const addCheckboxItem = (title: string, description: string, isRequired: boolean) => {
    // Check if we need a new page
    if (y > 260) {
      doc.addPage();
      y = 20;
    }
    
    // Draw checkbox
    doc.setDrawColor(100, 100, 100);
    doc.rect(margin, y - 4, 5, 5);
    
    // Title
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    const titleText = isRequired ? `${title} *` : title;
    doc.text(titleText, margin + 8, y);
    y += 6;
    
    // Description
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    const descLines = doc.splitTextToSize(description, maxWidth - 10);
    doc.text(descLines, margin + 8, y);
    y += descLines.length * 4 + 6;
  };

  const addSectionHeader = (title: string) => {
    if (y > 250) {
      doc.addPage();
      y = 20;
    }
    y += 4;
    doc.setFillColor(26, 54, 93); // Primary color
    doc.rect(margin, y - 6, maxWidth, 10, "F");
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text(title, margin + 4, y);
    y += 12;
  };

  // Header
  doc.setFillColor(26, 54, 93);
  doc.rect(0, 0, pageWidth, 40, "F");
  
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("ThaiDriveSecure", pageWidth / 2, 18, { align: "center" });
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(
    language === "en" 
      ? "Document Checklist for Thailand Entry by Vehicle" 
      : "Senarai Semak Dokumen untuk Masuk Thailand dengan Kenderaan",
    pageWidth / 2,
    28,
    { align: "center" }
  );
  
  doc.setFontSize(9);
  doc.text("by CNT Enterprise", pageWidth / 2, 35, { align: "center" });

  y = 55;

  // Intro text
  doc.setFontSize(10);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(80, 80, 80);
  doc.text(
    language === "en"
      ? "Print this checklist and tick off each item before your trip!"
      : "Cetak senarai semak ini dan tandakan setiap item sebelum perjalanan!",
    margin,
    y
  );
  y += 12;

  // Driver Documents
  addSectionHeader(language === "en" ? "DRIVER DOCUMENTS" : "DOKUMEN PEMANDU");
  
  if (language === "en") {
    addCheckboxItem("Passport", "Must have minimum 6 months validity from date of entry", true);
    addCheckboxItem("Malaysian Driving License", "Valid Malaysian driving license (CDL/GDL/PDL as applicable)", true);
    addCheckboxItem("International Driving Permit (IDP)", "Recommended for extended stays. Available from JPJ or AAM.", false);
  } else {
    addCheckboxItem("Pasport", "Mesti sah sekurang-kurangnya 6 bulan dari tarikh masuk", true);
    addCheckboxItem("Lesen Memandu Malaysia", "Lesen memandu Malaysia yang sah (CDL/GDL/PDL)", true);
    addCheckboxItem("Permit Memandu Antarabangsa (IDP)", "Disyorkan untuk penginapan lanjutan. Boleh didapati dari JPJ atau AAM.", false);
  }

  // Vehicle Documents
  addSectionHeader(language === "en" ? "VEHICLE DOCUMENTS" : "DOKUMEN KENDERAAN");
  
  if (language === "en") {
    addCheckboxItem("Original Vehicle Registration Card (Grant)", "The original JPJ vehicle registration document - not a copy", true);
    addCheckboxItem("Authorization Letter", "Required if the vehicle is not registered under your name. Must be notarized.", false);
    addCheckboxItem("Road Tax", "Valid Malaysian road tax disc", true);
  } else {
    addCheckboxItem("Kad Pendaftaran Kenderaan Asal (Geran)", "Dokumen pendaftaran kenderaan JPJ asal - bukan salinan", true);
    addCheckboxItem("Surat Kebenaran", "Diperlukan jika kenderaan tidak didaftarkan atas nama anda. Mesti disahkan.", false);
    addCheckboxItem("Cukai Jalan", "Cakera cukai jalan Malaysia yang sah", true);
  }

  // Insurance Documents
  addSectionHeader(language === "en" ? "INSURANCE DOCUMENTS" : "DOKUMEN INSURANS");
  
  if (language === "en") {
    addCheckboxItem("Thai Compulsory Insurance (Por Ror Bor)", "MANDATORY - Required by Thai law. We can arrange this for you!", true);
    addCheckboxItem("Voluntary Insurance", "Optional but highly recommended for additional protection against third-party claims.", false);
  } else {
    addCheckboxItem("Insurans Wajib Thai (Por Ror Bor)", "WAJIB - Diperlukan oleh undang-undang Thai. Kami boleh uruskan untuk anda!", true);
    addCheckboxItem("Insurans Sukarela", "Pilihan tetapi sangat disyorkan untuk perlindungan tambahan terhadap tuntutan pihak ketiga.", false);
  }

  // Border Documents
  addSectionHeader(language === "en" ? "BORDER / CUSTOMS DOCUMENTS" : "DOKUMEN SEMPADAN / KASTAM");
  
  if (language === "en") {
    addCheckboxItem("TM2 / TM3 Form", "Vehicle entry permit form. May be required depending on entry checkpoint.", false);
    addCheckboxItem("White Card", "Temporary vehicle import permit issued at the border checkpoint.", true);
  } else {
    addCheckboxItem("Borang TM2 / TM3", "Borang permit masuk kenderaan. Mungkin diperlukan bergantung pada pusat pemeriksaan.", false);
    addCheckboxItem("Kad Putih (White Card)", "Permit import kenderaan sementara yang dikeluarkan di pusat pemeriksaan sempadan.", true);
  }

  // Legend
  y += 6;
  doc.setFontSize(9);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(100, 100, 100);
  doc.text(language === "en" ? "* Required documents" : "* Dokumen yang diperlukan", margin, y);

  // Contact Section
  if (y > 220) {
    doc.addPage();
    y = 20;
  } else {
    y += 15;
  }

  doc.setFillColor(240, 240, 240);
  doc.rect(margin, y - 6, maxWidth, 45, "F");
  
  y += 2;
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(26, 54, 93);
  doc.text(language === "en" ? "CONTACT US" : "HUBUNGI KAMI", margin + 4, y);
  y += 8;
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60);
  doc.text("ThaiDriveSecure by CNT Enterprise", margin + 4, y);
  y += 5;
  doc.text("No 1, Pekan Lama Changlun, Lebuhraya Changlun-Bukit Kayu Hitam, Sintok, Malaysia", margin + 4, y);
  y += 5;
  doc.text("Phone: 011-1134 9776 (CNT) | 013-407 0752 (Intan)", margin + 4, y);
  y += 5;
  doc.text("Email: changloontour@gmail.com", margin + 4, y);
  y += 5;
  doc.text(language === "en" ? "Operating Hours: Everyday 5:00 AM - 11:45 PM" : "Waktu Operasi: Setiap Hari 5:00 AM - 11:45 PM", margin + 4, y);

  // Disclaimer
  y += 18;
  doc.setFillColor(255, 243, 205);
  doc.rect(margin, y - 6, maxWidth, 20, "F");
  
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(133, 100, 4);
  doc.text(language === "en" ? "DISCLAIMER" : "PENAFIAN", margin + 4, y);
  y += 5;
  
  doc.setFont("helvetica", "normal");
  const disclaimerText = language === "en"
    ? "Requirements may vary by border checkpoint and Thai authorities. Please confirm current requirements before your trip."
    : "Keperluan mungkin berbeza mengikut pusat pemeriksaan sempadan dan pihak berkuasa Thai. Sila sahkan keperluan semasa sebelum perjalanan anda.";
  const disclaimerLines = doc.splitTextToSize(disclaimerText, maxWidth - 8);
  doc.text(disclaimerLines, margin + 4, y);

  // Save the PDF
  const fileName = language === "en"
    ? "ThaiDriveSecure-Document-Checklist.pdf"
    : "ThaiDriveSecure-Senarai-Semak-Dokumen.pdf";
  
  doc.save(fileName);
}
