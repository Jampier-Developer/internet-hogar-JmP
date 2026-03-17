



// Inicializar partículas de fondo
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    
    // Declarar todas las variables
    const ctaButton = document.querySelector('.cta-button');
    const featureItems = document.querySelectorAll('.feature-item');
    const qrImage = document.querySelector('.qr-image');
    
    // Verificar que el botón existe
    if (!ctaButton) {
        console.error('Error: No se encontró el botón .cta-button');
        return;
    }
    
    // Manejar error de carga de imagen QR
    if (qrImage) {
        qrImage.onerror = function() {
            console.log('Error al cargar la imagen QR, mostrando placeholder');
            this.style.display = 'none';
            const parent = this.parentElement;
            
            if (!parent.querySelector('.qr-placeholder')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'qr-placeholder';
                placeholder.innerHTML = '📱 QR';
                parent.appendChild(placeholder);
            }
        };

        qrImage.onload = function() {
            console.log('Imagen QR cargada correctamente');
            const parent = this.parentElement;
            const existingPlaceholder = parent.querySelector('.qr-placeholder');
            if (existingPlaceholder) {
                existingPlaceholder.remove();
            }
        };
    }
    
    // OPCIÓN 2: Ayuda interactiva con el QR (COMPLETAMENTE CORREGIDA)
    ctaButton.addEventListener('click', function() {
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-camera"></i> Preparando ayuda...';
        this.disabled = true;
        
        setTimeout(() => {
            // Tutorial interactivo del QR con botón de cierre
            const tutorialHTML = `
                <div class="qr-tutorial-modal" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); backdrop-filter:blur(10px); z-index:9999; display:flex; align-items:center; justify-content:center;">
                    
                    <!-- Botón X para cerrar el tutorial -->
                    <button onclick="closeTutorial()" style="position:absolute; top:20px; right:20px; width:45px; height:45px; border-radius:50%; background:rgba(255,255,255,0.1); border:2px solid rgba(255,255,255,0.2); color:white; font-size:1.5rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.3s; z-index:10000; hover:background:rgba(255,68,68,0.3);">
                        <i class="fas fa-times" style="color:#ff4e50; font-size:1.5rem;"></i>
                    </button>
                    
                    <div style="background:linear-gradient(135deg, #1a1a2e, #16213e); padding:2rem; border-radius:20px; max-width:500px; width:90%; border:1px solid rgba(255,255,255,0.1); box-shadow:0 20px 40px rgba(0,0,0,0.3); position:relative;">
                        
                        <h2 style="color:white; margin-bottom:1.5rem; font-size:1.8rem; text-align:center;">
                            <i class="fas fa-qrcode" style="color:#6a11cb; margin-right:10px;"></i>
                            Conectar con QR
                        </h2>
                        
                        <div style="margin-bottom:2rem;">
                            <!-- Paso 1 -->
                            <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.5rem; animation: slideInRight 0.5s ease;">
                                <div style="width:40px; height:40px; background:linear-gradient(135deg, #6a11cb, #2575fc); border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; color:white;">1</div>
                                <div style="flex:1;">
                                    <h3 style="color:white; margin-bottom:0.3rem;">Abre la cámara</h3>
                                    <p style="color:rgba(255,255,255,0.7);">En tu teléfono, abre la aplicación de cámara</p>
                                </div>
                                <i class="fas fa-camera" style="color:#fdcb6e; font-size:2rem;"></i>
                            </div>
                            
                            <!-- Paso 2 -->
                            <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.5rem; animation: slideInRight 0.6s ease;">
                                <div style="width:40px; height:40px; background:linear-gradient(135deg, #6a11cb, #2575fc); border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; color:white;">2</div>
                                <div style="flex:1;">
                                    <h3 style="color:white; margin-bottom:0.3rem;">Enfoca el QR</h3>
                                    <p style="color:rgba(255,255,255,0.7);">Apunta al código QR de la tarjeta</p>
                                </div>
                                <i class="fas fa-qrcode" style="color:#00b894; font-size:2rem;"></i>
                            </div>
                            
                            <!-- Paso 3 -->
                            <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.5rem; animation: slideInRight 0.7s ease;">
                                <div style="width:40px; height:40px; background:linear-gradient(135deg, #6a11cb, #2575fc); border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; color:white;">3</div>
                                <div style="flex:1;">
                                    <h3 style="color:white; margin-bottom:0.3rem;">Espera la notificación</h3>
                                    <p style="color:rgba(255,255,255,0.7);">Aparecerá una notificación para conectarte</p>
                                </div>
                                <i class="fas fa-bell" style="color:#ff4e50; font-size:2rem;"></i>
                            </div>
                            
                            <!-- Paso 4 -->
                            <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.5rem; animation: slideInRight 0.8s ease;">
                                <div style="width:40px; height:40px; background:linear-gradient(135deg, #6a11cb, #2575fc); border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; color:white;">4</div>
                                <div style="flex:1;">
                                    <h3 style="color:white; margin-bottom:0.3rem;">Toca para conectar</h3>
                                    <p style="color:rgba(255,255,255,0.7);">Confirma la conexión a Internet JmP</p>
                                </div>
                                <i class="fas fa-wifi" style="color:#6a11cb; font-size:2rem;"></i>
                            </div>
                        </div>
                        
                        <!-- Demo interactivo del QR -->
                        <div style="background:rgba(255,255,255,0.05); border-radius:15px; padding:1.5rem; margin-bottom:1.5rem; text-align:center;">
                            <p style="color:white; margin-bottom:1rem;">
                                <i class="fas fa-magic" style="color:#fdcb6e;"></i>
                                Simulación del escaneo:
                            </p>
                            <div style="display:flex; align-items:center; justify-content:center; gap:1rem;">
                                <div style="width:80px; height:80px; background:white; border-radius:10px; display:flex; align-items:center; justify-content:center; animation: pulse 2s infinite;">
                                    <i class="fas fa-qrcode" style="color:black; font-size:2.5rem;"></i>
                                </div>
                                <i class="fas fa-arrow-right" style="color:#6a11cb; font-size:1.5rem;"></i>
                                <div style="width:80px; height:80px; background:linear-gradient(135deg, #00b894, #00cec9); border-radius:50%; display:flex; align-items:center; justify-content:center; animation: pulse 2s infinite 0.5s;">
                                    <i class="fas fa-check" style="color:white; font-size:2rem;"></i>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Botones de acción -->
                        <div style="display:flex; gap:1rem;">
                            <button onclick="simulateQRScan()" style="flex:2; padding:1rem; background:linear-gradient(135deg, #00b894, #00cec9); border:none; border-radius:10px; color:white; font-weight:600; cursor:pointer; transition:all 0.3s;">
                                <i class="fas fa-play"></i> Simular Escaneo
                            </button>
                            <button onclick="closeTutorial()" style="flex:1; padding:1rem; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:10px; color:white; font-weight:600; cursor:pointer; transition:all 0.3s;">
                                <i class="fas fa-times"></i> Cerrar
                            </button>
                        </div>
                        
                        <!-- Texto de ayuda adicional -->
                        <p style="color:rgba(255,255,255,0.4); text-align:center; margin-top:1rem; font-size:0.8rem;">
                            <i class="fas fa-info-circle"></i> Puedes cerrar en cualquier momento con la X
                        </p>
                    </div>
                </div>
            `;
            
            // Añadir tutorial al body
            const tutorial = document.createElement('div');
            tutorial.innerHTML = tutorialHTML;
            document.body.appendChild(tutorial.firstElementChild);
            
            // Restaurar botón
            this.innerHTML = originalText;
            this.disabled = false;
        }, 1000);
    });
    
    // Efectos para las características
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(15deg)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });
    
    // Efecto de escritura para el título
    const title = document.querySelector('h1');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
});

// ============================================
// FUNCIÓN: simulateQRScan (con botones de cierre)
// ============================================
window.simulateQRScan = function() {
    const modal = document.querySelector('.qr-tutorial-modal');
    
    // Mostrar animación de escaneo
    const scanAnimation = document.createElement('div');
    scanAnimation.style.cssText = `
        position:fixed; top:0; left:0; width:100%; height:100%;
        background:rgba(0,0,0,0.95); z-index:10000;
        display:flex; align-items:center; justify-content:center;
        flex-direction:column;
    `;
    
    scanAnimation.id = 'scan-animation';
    
    scanAnimation.innerHTML = `
        <!-- Botón X grande para cerrar -->
        <button onclick="closeScanAnimation()" style="position:absolute; top:20px; right:20px; width:50px; height:50px; border-radius:50%; background:rgba(255,68,68,0.2); border:2px solid #ff4e50; color:white; font-size:1.8rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.3s; z-index:10001; hover:background:#ff4e50;">
            <i class="fas fa-times" style="color:#ff4e50;"></i>
        </button>
        
        <div style="width:250px; height:250px; border:4px solid #6a11cb; border-radius:30px; position:relative; margin-bottom:2rem; box-shadow:0 0 30px rgba(106,17,203,0.5);">
            <div class="scan-line" style="position:absolute; top:0; left:0; width:100%; height:4px; background:linear-gradient(90deg, transparent, #6a11cb, #2575fc, #6a11cb, transparent); animation: scan 2s linear infinite;"></div>
            <i class="fas fa-qrcode" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); color:white; font-size:4rem; opacity:0.5;"></i>
        </div>
        
        <p style="color:white; font-size:1.5rem; margin-bottom:0.5rem;">Escaneando...</p>
        <p style="color:rgba(255,255,255,0.6); margin-bottom:1rem;">Mantén el QR dentro del marco</p>
        
        <!-- Botón de cancelar abajo -->
        <button onclick="closeScanAnimation()" style="margin-top:1rem; padding:0.8rem 2rem; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:50px; color:white; font-weight:600; cursor:pointer; transition:all 0.3s;">
            <i class="fas fa-times"></i> Cancelar
        </button>
        
        <p style="color:rgba(255,255,255,0.3); margin-top:2rem; font-size:0.9rem;">
            <i class="fas fa-times-circle" style="color:#ff4e50;"></i>
            Puedes cerrar en cualquier momento
        </p>
    `;
    
    document.body.appendChild(scanAnimation);
    
    // Simular resultado después de 3 segundos
    setTimeout(() => {
        const animacionExistente = document.getElementById('scan-animation');
        if (animacionExistente) {
            animacionExistente.innerHTML = `
                <!-- Botón X para cerrar -->
                <button onclick="closeScanAnimation()" style="position:absolute; top:20px; right:20px; width:50px; height:50px; border-radius:50%; background:rgba(255,68,68,0.2); border:2px solid #ff4e50; color:white; font-size:1.8rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.3s; z-index:10001;">
                    <i class="fas fa-times" style="color:#ff4e50;"></i>
                </button>
                
                <div style="width:120px; height:120px; background:#00b894; border-radius:50%; display:flex; align-items:center; justify-content:center; margin-bottom:2rem; animation: pulse 0.5s; box-shadow:0 0 30px #00b894;">
                    <i class="fas fa-check" style="color:white; font-size:4rem;"></i>
                </div>
                
                <h2 style="color:white; font-size:2rem; margin-bottom:1rem;">¡QR Detectado!</h2>
                <p style="color:#00b894; font-size:1.3rem; margin-bottom:2rem; background:rgba(0,184,148,0.1); padding:0.5rem 1.5rem; border-radius:50px;">
                    <i class="fas fa-wifi"></i> Internet JmP - 5G
                </p>
                
                <!-- Botones -->
                <div style="display:flex; gap:1rem; margin-bottom:1rem;">
                    <button onclick="completeQRConnection()" style="padding:1rem 2.5rem; background:linear-gradient(135deg, #6a11cb, #2575fc); border:none; border-radius:50px; color:white; font-weight:600; cursor:pointer; font-size:1.1rem;">
                        <i class="fas fa-wifi"></i> Conectar Ahora
                    </button>
                    <button onclick="closeScanAnimation()" style="padding:1rem 2rem; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:50px; color:white; font-weight:600; cursor:pointer;">
                        <i class="fas fa-times"></i> Cerrar
                    </button>
                </div>
            `;
        }
    }, 3000);
};

// ============================================
// FUNCIÓN: closeScanAnimation (cerrar animación)
// ============================================
window.closeScanAnimation = function() {
    const scanAnimation = document.getElementById('scan-animation');
    if (scanAnimation) {
        scanAnimation.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        scanAnimation.style.opacity = '0';
        scanAnimation.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            if (scanAnimation.parentElement) {
                scanAnimation.remove();
            }
        }, 300);
    }
};

// ============================================
// FUNCIÓN: completeQRConnection (completar conexión)
// ============================================
window.completeQRConnection = function() {
    // Cerrar todas las ventanas
    document.querySelector('.qr-tutorial-modal')?.remove();
    document.getElementById('scan-animation')?.remove();
    
    // Mostrar mensaje de éxito con botón de cierre
    const successMsg = document.createElement('div');
    successMsg.style.cssText = `
        position:fixed; top:30px; right:30px;
        background:linear-gradient(135deg, #00b894, #00cec9);
        padding:1.2rem 2rem; border-radius:15px;
        color:white; box-shadow:0 15px 30px rgba(0,0,0,0.3);
        animation: slideInRight 0.3s ease;
        z-index:10001;
        display:flex;
        align-items:center;
        gap:15px;
        border-left:5px solid white;
    `;
    successMsg.innerHTML = `
        <i class="fas fa-check-circle" style="font-size:2rem;"></i>
        <div>
            <strong style="font-size:1.2rem;">¡Conectado!</strong>
            <p style="opacity:0.9; margin-top:5px;">Internet JmP - 5G</p>
        </div>
        <button onclick="this.parentElement.remove()" style="background:none; border:none; color:white; cursor:pointer; font-size:1.3rem; opacity:0.8; margin-left:20px; hover:opacity:1;">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(successMsg);
    
    // Auto-cerrar después de 5 segundos
    setTimeout(() => {
        if (successMsg.parentElement) {
            successMsg.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (successMsg.parentElement) {
                    successMsg.remove();
                }
            }, 300);
        }
    }, 5000);
};

// ============================================
// FUNCIÓN: closeTutorial (cerrar tutorial)
// ============================================
window.closeTutorial = function() {
    const modal = document.querySelector('.qr-tutorial-modal');
    if (modal) {
        modal.style.transition = 'opacity 0.3s ease';
        modal.style.opacity = '0';
        
        setTimeout(() => {
            if (modal.parentElement) {
                modal.remove();
            }
        }, 300);
    }
};

// ============================================
// ESTILOS GLOBALES (todas las animaciones)
// ============================================
const style = document.createElement('style');
style.textContent = `
    /* Animaciones existentes */
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(50px);
        }
    }
    
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
    
    @keyframes scan {
        0% { top: 0; }
        100% { top: 100%; }
    }
    
    /* Hover effects */
    .qr-tutorial-modal button:hover,
    #scan-animation button:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
    
    .qr-tutorial-modal button:active,
    #scan-animation button:active {
        transform: translateY(0);
    }
    
    /* Estilo para el botón X especial */
    button:has(i.fa-times) {
        transition: all 0.3s ease;
    }
    
    button:has(i.fa-times):hover {
        background: rgba(255, 68, 68, 0.3) !important;
        border-color: #ff4e50 !important;
    }
    
    button:has(i.fa-times):hover i {
        color: white !important;
    }
    
    /* Placeholder QR */
    .qr-placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #6a11cb, #2575fc);
        color: white;
        font-size: 1.5rem;
        border-radius: 10px;
        z-index: 2;
    }
`;

document.head.appendChild(style);   


































// ============================================
// MODAL AVANZADO PARA IMAGEN QR
// ============================================

// Variables globales para el modal avanzado
let currentZoom = 1;
const ZOOM_STEP = 0.1;
const MAX_ZOOM = 3;
const MIN_ZOOM = 0.5;

// Función para abrir modal avanzado
window.openQRModalAdvanced = function() {
    const qrImage = document.querySelector('.qr-image');
    const qrSrc = qrImage ? qrImage.src : 'img/QR-JmP.jpg';
    const qrAlt = qrImage ? qrImage.alt : 'Código QR';
    
    // Reset zoom
    currentZoom = 1;
    
    const modalHTML = `
        <div class="qr-modal-overlay" id="qrModalOverlay" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.95); backdrop-filter:blur(10px); z-index:100000; display:flex; align-items:center; justify-content:center; opacity:0; transition:opacity 0.3s ease;" onclick="closeQRModal()">
            
            <!-- Botón de cerrar (X) -->
            <button class="qr-modal-close" onclick="event.stopPropagation(); closeQRModal()" style="position:absolute; top:20px; right:20px; width:50px; height:50px; border-radius:50%; background:rgba(255,68,68,0.2); border:2px solid #ff4e50; color:white; font-size:1.8rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.3s; z-index:100001;">
                <i class="fas fa-times" style="color:#ff4e50;"></i>
            </button>
            
            <!-- Controles de zoom -->
            <div style="position:absolute; bottom:30px; left:50%; transform:translateX(-50%); display:flex; gap:15px; background:rgba(0,0,0,0.5); padding:15px 25px; border-radius:50px; border:1px solid rgba(255,255,255,0.1); z-index:100001;">
                <button onclick="event.stopPropagation(); zoomQR('out')" style="width:45px; height:45px; border-radius:50%; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:white; cursor:pointer; font-size:1.5rem;">
                    <i class="fas fa-search-minus"></i>
                </button>
                <span style="color:white; line-height:45px; min-width:80px; text-align:center;" id="zoomLevel">100%</span>
                <button onclick="event.stopPropagation(); zoomQR('in')" style="width:45px; height:45px; border-radius:50%; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:white; cursor:pointer; font-size:1.5rem;">
                    <i class="fas fa-search-plus"></i>
                </button>
                <button onclick="event.stopPropagation(); downloadQR()" style="width:45px; height:45px; border-radius:50%; background:linear-gradient(135deg, #6a11cb, #2575fc); border:none; color:white; cursor:pointer; font-size:1.2rem; margin-left:10px;">
                    <i class="fas fa-download"></i>
                </button>
            </div>
            
            <!-- Contenedor de la imagen -->
            <div class="qr-modal-content" onclick="event.stopPropagation()" style="max-width:90%; max-height:90%; text-align:center; overflow:auto; cursor:zoom-in;" ondblclick="resetQRZoom()">
                <img id="modalQRImage" src="${qrSrc}" alt="${qrAlt}" style="max-width:100%; max-height:80vh; border-radius:20px; box-shadow:0 0 50px rgba(106,17,203,0.5); border:5px solid rgba(255,255,255,0.1); transition:transform 0.2s ease; transform:scale(${currentZoom});">
                
                <p style="color:white; margin-top:20px; font-size:1rem; opacity:0.6;">
                    <i class="fas fa-info-circle"></i> 
                    Doble clic para resetear zoom | Rueda del mouse para hacer zoom
                </p>
            </div>
        </div>
    `;
    
    const modal = document.createElement('div');
    modal.innerHTML = modalHTML;
    document.body.appendChild(modal.firstElementChild);
    
    setTimeout(() => {
        const overlay = document.getElementById('qrModalOverlay');
        if (overlay) overlay.style.opacity = '1';
    }, 10);
    
    // Agregar evento de rueda del mouse para zoom
    setTimeout(() => {
        const modalImage = document.getElementById('modalQRImage');
        if (modalImage) {
            modalImage.addEventListener('wheel', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                if (e.deltaY < 0) {
                    // Zoom in
                    zoomQR('in');
                } else {
                    // Zoom out
                    zoomQR('out');
                }
            });
        }
    }, 100);
};

// Función para hacer zoom
window.zoomQR = function(direction) {
    if (direction === 'in' && currentZoom < MAX_ZOOM) {
        currentZoom += ZOOM_STEP;
    } else if (direction === 'out' && currentZoom > MIN_ZOOM) {
        currentZoom -= ZOOM_STEP;
    }
    
    const modalImage = document.getElementById('modalQRImage');
    const zoomLevel = document.getElementById('zoomLevel');
    
    if (modalImage) {
        modalImage.style.transform = `scale(${currentZoom})`;
    }
    
    if (zoomLevel) {
        zoomLevel.textContent = Math.round(currentZoom * 100) + '%';
    }
};

// Función para resetear zoom
window.resetQRZoom = function() {
    currentZoom = 1;
    const modalImage = document.getElementById('modalQRImage');
    const zoomLevel = document.getElementById('zoomLevel');
    
    if (modalImage) {
        modalImage.style.transform = `scale(${currentZoom})`;
    }
    
    if (zoomLevel) {
        zoomLevel.textContent = '100%';
    }
};

// Función para descargar QR
window.downloadQR = function() {
    const qrImage = document.querySelector('.qr-image');
    const qrSrc = qrImage ? qrImage.src : 'img/QR-JmP.jpg';
    
    // Crear enlace de descarga
    const link = document.createElement('a');
    link.href = qrSrc;
    link.download = 'QR-JmP.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Mostrar mensaje de confirmación
    const msg = document.createElement('div');
    msg.style.cssText = `
        position:fixed; bottom:100px; left:50%; transform:translateX(-50%);
        background:#00b894; padding:1rem 2rem; border-radius:50px;
        color:white; z-index:100002; animation: slideUp 0.3s ease;
    `;
    msg.innerHTML = '<i class="fas fa-check"></i> QR descargado';
    document.body.appendChild(msg);
    
    setTimeout(() => {
        msg.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => msg.remove(), 300);
    }, 2000);
};

// Función para cerrar modal
window.closeQRModal = function() {
    const overlay = document.getElementById('qrModalOverlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => {
            if (overlay.parentElement) {
                overlay.remove();
            }
        }, 300);
    }
};

// Agregar evento de clic al QR
document.addEventListener('DOMContentLoaded', function() {
    const qrImage = document.querySelector('.qr-image');
    const qrContainer = document.querySelector('.qr-code');
    
    if (qrImage || qrContainer) {
        const openModal = function(e) {
            e.preventDefault();
            e.stopPropagation();
            window.openQRModalAdvanced(); // Cambia a openQRModal() para versión simple
        };
        
        if (qrImage) {
            qrImage.style.cursor = 'pointer';
            qrImage.addEventListener('click', openModal);
        }
        
        if (qrContainer) {
            qrContainer.style.cursor = 'pointer';
            qrContainer.addEventListener('click', openModal);
        }
        
        // Estilos para el modal
        const style = document.createElement('style');
        style.textContent = `
            .qr-image, .qr-code {
                cursor: pointer !important;
                transition: all 0.3s ease;
            }
            
            .qr-image:hover, .qr-code:hover {
                transform: scale(1.02);
                box-shadow: 0 0 20px rgba(106, 17, 203, 0.5);
            }
            
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translate(-50%, 20px);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, 0);
                }
            }
            
            @keyframes slideDown {
                from {
                    opacity: 1;
                    transform: translate(-50%, 0);
                }
                to {
                    opacity: 0;
                    transform: translate(-50%, 20px);
                }
            }
            
            .qr-modal-close:hover {
                background: #ff4e50 !important;
                border-color: #ff4e50 !important;
            }
            
            .qr-modal-close:hover i {
                color: white !important;
            }
        `;
        document.head.appendChild(style);
    }
});
