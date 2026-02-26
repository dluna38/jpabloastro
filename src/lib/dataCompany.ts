
export type SocialPlatform = 'instagram' | 'facebook' | 'linkedin' | 'twitter' | 'whatsapp' | 'youtube';

export interface SocialLink {
    platform: string; // El nombre legible (ej: 'Instagram')
    url: string;      // El enlace real
}

export interface CompanyInfo {
    _type: 'companyInfo';
    name: string;
    legalName: string;
    description: string[];
    address: string;
    phone: string;
    email: string;
    socials: Partial<Record<SocialPlatform, SocialLink>>;
}

export interface Service {
    _id: string;
    _type: 'service';
    title: string;
    description: string;
    icon: string;
}



export const myCompanyInfo: CompanyInfo = {
    _type: 'companyInfo',
    name: 'Juan Pablo II',
    legalName: 'Construcciones Juan Pablo II S.A.S.',
    description: ['Somos una empresa constructora joven en el Oriente Antioqueño, comprometida con la calidad, innovación y el desarrollo sostenible de nuestra región. Con 5 años de experiencia, transformamos sueños en realidades tangibles.','Fundada en el corazón del Oriente Antioqueño, Construcciones Juan Pablo II S.A.S. nació con la visión de elevar los estándares de construcción en la región. Durante este tiempo, hemos participado en numerosos proyectos urbanos y rurales, siempre priorizando la satisfacción de nuestros usuarios y el respeto por el entorno.'],
    address: 'San Carlos, Antioquia, Colombia',
    phone: '+573116105615',
    email: 'informacion@juanpabloll.com',
    socials: {
        instagram: { platform: 'instagram', url: 'https://instagram.com' },
        facebook: { platform: 'facebook', url: 'https://facebook.com' },
        whatsapp: { platform: 'whatsapp', url: 'https://wa.me/573116105615?text='+encodeURIComponent('¡Hola! Me gustaría hacer una consulta sobre sus servicios.') },
        youtube: { platform: 'youtube', url: 'https://youtube.com' }
    }
};

export const mockServices: Service[] = [
    {
        _id: '1',
        _type: 'service',
        title: 'Obra Civil',
        description: 'Ejecución de proyectos de infraestructura y edificación con los más altos estándares de calidad.',
        icon: 'hammer'
    },
    {
        _id: '2',
        _type: 'service',
        title: 'Remodelaciones',
        description: 'Transformamos espacios existentes para adaptarlos a nuevas necesidades y estilos de vida.',
        icon: 'paint-roller'
    },
    {
        _id: '3',
        _type: 'service',
        title: 'Diseño Arquitectónico',
        description: 'Planificación y diseño de espacios funcionales y estéticamente atractivos.',
        icon: 'ruler-combined'
    }
];