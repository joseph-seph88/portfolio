export default function Footer() {
    return (
        <footer className="mt-20 py-8 border-t border-gray-200">
            <div className="text-center">
                <FooterLogo />
            </div>
        </footer>
    );
}


function FooterLogo() {
    return (
        <div style={{ fontFamily: 'monospace', textAlign: 'center' }}>
            <p style={{ fontSize: '0.75rem', color: '#9CA3AF', letterSpacing: '0.15em' }}>
                Be strong and courageous
            </p>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#666', marginTop: '4px' }}>
                DEVELOPED BY JOSEPH88
            </p>
        </div>
    );
}
