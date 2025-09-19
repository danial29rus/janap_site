import { useState, useEffect } from "react";

interface TextController {
  site: {
    title: string;
    description: string;
    brandName: string;
  };
  navigation: {
    sections: {
      hero: string;
      about: string;
      pricing: string;
      cases: string;
      contact: string;
      faq: string;
    };
    ctaButton: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    content: {
      intro: string;
      mission: string;
      experience: string;
      personal: string;
      direct: string;
      quality: string;
      approach: string;
    };
    benefits: Array<{
      title: string;
      description: string;
    }>;
    ctaButton: string;
    signature: string;
  };
  pricing: {
    title: string;
    subtitle?: string;
    plans: Array<{
      title: string;
      price: string;
      description: string;
      details?: string[];
      suitableFor?: string[];
      note?: string;
    }>;
    ctaButton: string;
  };
  reviews: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      case: string;
      text: string;
    }>;
  };
  feedback: {
    title: string;
    subtitle: string;
    items: Array<{
      id: number;
      name: string;
      avatar: string;
      rating: number;
      date: string;
      visaType: string;
      text: string;
    }>;
  };
  contact: {
    title: string;
    directContacts: {
      title: string;
      subtitle: string;
      contacts: Array<{
        type: string;
        label: string;
        value: string;
        link: string;
        icon: string;
      }>;
    };
    form: {
      title: string;
      nameLabel: string;
      phoneLabel: string;
      emailLabel: string;
      visaTypeLabel: string;
      visaTypes: Array<{
        value: string;
        label: string;
      }>;
      commentLabel: string;
      submitButton: string;
    };
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export function useTexts() {
  const [texts, setTexts] = useState<TextController | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTexts = async () => {
      try {
        const response = await fetch("/textcontroller.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTexts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load texts");
        console.error("Error loading textcontroller.json:", err);
      } finally {
        setLoading(false);
      }
    };

    loadTexts();
  }, []);

  return { texts, loading, error };
}

// Fallback texts for SSG build
export const fallbackTexts: TextController = {
  site: {
    title: "Japan Visa - Виза в Японию без стресса",
    description: "Профессиональное оформление визы в Японию",
    brandName: "Japan Visa",
  },
  navigation: {
    sections: {
      hero: "Главная",
      about: "Обо мне",
      pricing: "Цены",
      cases: "Отзывы",
      contact: "Контакты",
      faq: "FAQ",
    },
    ctaButton: "Оформить визу",
  },
  hero: {
    badge: "by Irina Mironova - personal brand",
    title: "Виза в Японию без стресса",
    subtitle: "Традиционная эстетика, современный сервис",
    ctaPrimary: "Оставить заявку",
    ctaSecondary: "Почему со мной",
  },
  about: {
    title: "Кто я и почему мне можно доверять",
    content: {
      intro: "Привет! Меня зовут Ирина Миронова",
      mission: "Помогаю получить визу в Японию легко и понятно",
      experience: "За последний год оформила более 200 виз",
      personal: "Каждый клиент - личная история",
      direct: "Работаю напрямую, без посредников",
      quality: "Проверяю всё до мельчайших деталей",
      approach: "Индивидуальный подход к каждому",
    },
    benefits: [
      {
        title: "Официально и легально:",
        description: "с учётом всех требований",
      },
      { title: "Без бюрократии:", description: "только нужное" },
      { title: "Гарантия внимания:", description: "на связи всегда" },
      { title: "99,9% успеха:", description: "высокий процент одобрения" },
    ],
    ctaButton: "Посмотреть цены",
    signature: "Ирина Миронова, JPN Visa",
  },
  pricing: {
    title: "Какие визы я оформляю",
    subtitle:
      "💡 Я помогу собрать документы так, чтобы у вас были реальные шансы получить мультивизу даже если вы раньше не летали в Японию.",
    plans: [
      {
        title: "Туристическая виза (Single Entry)",
        price: "12 000 ₽",
        description:
          "Однократная туристическая виза подходит тем, кто едет в Японию впервые",
        details: [
          "Срок действия визы: 3 месяца с момента выдачи",
          "Максимальный срок пребывания: до 15 дней",
          "Срок оформления: до 7 рабочих дней с момента подачи",
        ],
      },
      {
        title: "Туристическая мультивиза (Multiple Entry)",
        price: "12 000 ₽",
        description: "Виза на 3 года с возможностью многократных поездок",
        details: [
          "Срок действия визы: 3 года",
          "Максимальный срок пребывания за одну поездку: до 30 дней",
          "Количество въездов: неограниченно",
        ],
      },
    ],
    ctaButton: "Оставить заявку",
  },
  reviews: {
    title: "Обо мне",
    subtitle: "Эксперт по визам с опытом более 7 лет",
    items: [],
  },
  feedback: {
    title: "Отзывы клиентов",
    subtitle: "Более 200 успешно оформленных виз",
    items: [
      {
        id: 1,
        name: "Анна Петрова",
        avatar: "👩‍💼",
        rating: 5,
        date: "2024-01-15",
        visaType: "Туристическая виза",
        text: "Отличный сервис!",
      },
    ],
  },
  contact: {
    title: "Контакты и связь",
    directContacts: {
      title: "или свяжитесь со мной напрямую",
      subtitle: "Ирина Миронова",
      contacts: [
        {
          type: "phone",
          label: "Телефон",
          value: "+7 968 079 73 57",
          link: "tel:+79680797357",
          icon: "📞",
        },
        {
          type: "telegram",
          label: "Telegram",
          value: "@visa_by_mironova",
          link: "https://t.me/visa_by_mironova",
          icon: "💬",
        },
        {
          type: "whatsapp",
          label: "WhatsApp",
          value: "+7 968 079 73 57",
          link: "https://api.whatsapp.com/send/?phone=79680797357&text&type=phone_number&app_absent=0",
          icon: "📱",
        },
      ],
    },
    form: {
      title: "Заполните и отправьте форму",
      nameLabel: "Имя",
      phoneLabel: "Телефон",
      emailLabel: "Email",
      visaTypeLabel: "Тип визы",
      visaTypes: [
        {
          value: "single",
          label: "Туристическая виза (Single Entry) - 12 000 ₽",
        },
        {
          value: "multiple",
          label: "Туристическая мультивиза (Multiple Entry) - 12 000 ₽",
        },
      ],
      commentLabel: "Комментарий",
      submitButton: "Отправить заявку",
    },
  },
  faq: {
    title: "Часто задаваемые вопросы",
    items: [],
  },
};
