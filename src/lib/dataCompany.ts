
export type SocialPlatform = 'instagram' | 'facebook' | 'linkedin' | 'twitter' | 'whatsapp' | 'youtube';

export interface SocialLink {
    platform: string; // El nombre legible (ej: 'Instagram')
    url: string;      // El enlace real
}

export interface CompanyInfo {
    _type: 'companyInfo';
    name: string;
    legalName: string;
    description: string;
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
    description: 'Somos una empresa constructora líder en el Oriente Antioqueño, comprometida con la calidad, la innovación y el desarrollo sostenible de nuestra región. Con años de experiencia, transformamos sueños en realidades tangibles.',
    address: 'San Carlos, Antioquia, Colombia',
    phone: '+57 300 123 4567',
    email: 'contacto@construccionesjuanpabloii.com',
    socials: {
        instagram: { platform: 'instagram', url: 'https://instagram.com' },
        facebook: { platform: 'facebook', url: 'https://facebook.com' },
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